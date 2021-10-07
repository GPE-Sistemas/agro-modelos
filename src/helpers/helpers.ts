import jwt from 'jsonwebtoken';
import got from 'got';
import bcrypt from 'bcryptjs';
import { ObjectSchema, ValidationResult } from 'joi';
import { Types } from 'mongoose';
import { IAck, IDownlink, IParsedQuery, IQueryParams, IUplink } from '../modelos';
import { Options, Method } from 'got/dist/source/core';

export function validateSchema(dato: any, schema: ObjectSchema): void {
    const result: ValidationResult = schema.validate(dato);
    if (!result.error) {
        return;
    } else {
        throw {
            error: result.error,
            status: 400,
            mensaje: result.error?.details?.[0]?.message
        };
    }
}

function getFilterValue(type: 'number' | 'string' | 'boolean' | 'date' | 'object' | 'regex' | 'objectid', value: any) {
    if (type === 'string') {
        return value;
    } else if (type === 'date') {
        return new Date(value);
    } else if (type === 'number') {
        return +value;
    } else if (type === 'boolean' || type === 'object') {
        try {
            return JSON.parse(value);
        } catch (err) {
            return value;
        }
    } else if (type === 'regex') {
        return { $regex: value, $options: 'i' };
    } else {
        return new Types.ObjectId(value);
    }
}

export function parseQueryFilters(queryParams?: IQueryParams): IParsedQuery {
    const parsedQuery: IParsedQuery = {
        limit: +(queryParams?.limit || 0),
        sort: queryParams?.sort?.toString() || '-fecha',
        skip: +(queryParams?.page || 0) * +(queryParams?.limit || 0),
        filter: {},
    };
    if (typeof queryParams?.filter === 'string') {
        try {
            queryParams.filter = JSON.parse(queryParams.filter);
        } catch (err) {
            // nada
        }
    }
    if (typeof queryParams?.filter === 'object') {
        for (const filtro of queryParams.filter) {
            if (typeof filtro.field === 'string') {
                parsedQuery.filter[filtro.field] = getFilterValue(filtro.type, filtro.value);
            } else {
                parsedQuery.filter.$or = [];
                for (const field of filtro.field) {
                    parsedQuery.filter.$or.push({ [field]: getFilterValue(filtro.type, filtro.value) });
                }
            }
        }
    }
    
    return parsedQuery;
}

export function uplinkLabels(uplink: IUplink) {
    const labels = {
        aplicacion: uplink.aplicacion,
        deveui: uplink.deveui,
        idCliente: uplink.idCliente,
        payload: uplink.payload,
        puerto: uplink.puerto + '',
        tipo: 'uplink',
    };
    return labels;
}

export function ackLabels(ack: IAck) {
    const labels = {
        aplicacion: ack.aplicacion,
        ack: ack.acknowledged ? 'true' : 'false',
        deveui: ack.deveui,
        fCnt: ack.fCnt + '',
        idCliente: ack.idCliente,
        tipo: 'ack',
    };
    return labels;
}

export function downlinkLabels(downlink: IDownlink) {
    const labels = {
        deveui: downlink.deveui,
        payload: downlink.payload,
        puerto: downlink.puerto + '',
        red: downlink.red,
        tipo: 'downlink',
    };
    return labels;
}

export function crearTokenChirpstack(username: string, jwtSecret: string) {
    let actualTime = Math.trunc(new Date().getTime() / 1000);
    const expire = actualTime + (60 * 10);
    actualTime -= (60 * 60 * 4);
    const tokenInfo = {
        aud: 'chirpstack-application-server',
        exp: expire,
        iss: 'chirpstack-application-server',
        nbf: actualTime,
        sub: 'user',
        username,
    };
    return jwt.sign(tokenInfo, jwtSecret);
}

export async function httpRequest<T>(url: string, method: string, queryParams?: Record<string, string | number | boolean>, headers?: Record<string, string>, body?: Record<string, any> | string): Promise<{ body: T, headers: any }> {
    try {
        const options: Options = {
            timeout: 60000,
            method: method.toUpperCase() as Method,
            https: {
                rejectUnauthorized: false,
            },
            throwHttpErrors: false,
        };
        if (queryParams) {
            options.searchParams = queryParams;
        }
        if (headers) {
            options.headers = headers;
        }
        if (body && (method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT')) {
            if (typeof body === 'object') {
                options.json = body;
            } else {
                options.body = body;
            }
        }
        const response: any = await got(url, options);

        let parsedBody;
        try {
            parsedBody = JSON.parse(response.body);
        } catch (err) {
            parsedBody = response.body;
        }

        let reponseHeaders;
        try {
            reponseHeaders = JSON.parse(response.headers);
        } catch (err) {
            reponseHeaders = response.headers;
        }

        if (/^2/.test('' + response.statusCode)) {
            return { body: parsedBody, headers: reponseHeaders };
        } else {
            throw {
                error: parsedBody,
                status: response.statusCode,
                mensaje: parsedBody.mensaje || parsedBody.message || response.statusMessage
            };
        }
    } catch (err: any) {
        switch (err.code) {
            case 'ETIMEDOUT': {
                throw {
                    status: 500,
                    mensaje: 'Tiempo de espera agotado para la solicitud',
                    err
                };
            }
            case 'ENOTFOUND': {
                throw {
                    status: 500,
                    mensaje: `Direccion ${err.options?.url} no entontrada`,
                    err
                };
            }
            case 'ECONNREFUSED': {
                throw {
                    status: 500,
                    mensaje: `Direccion ${err.options?.url} no entontrada`,
                    err
                };
            }
            default: {
                throw err;
            }
        }
    }
}

export async function hashClave(clave: string): Promise<string> {
    return await bcrypt.hash(clave, 10);
}

export async function compareClave(clave: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(clave, hash);
}

export function deveuiValido(deveui: string): boolean {
    function esHexadecimal(numeroHexadecimal: string): boolean {
        return /^[0-9A-F]+$/gi.test(numeroHexadecimal);
    }
    if (deveui) {
        if (esHexadecimal(deveui)) {
            if (deveui.length === 16) {
                return true;
            }
        }
    }
    return false;
}

export function getEstadoComando(ejecutado: boolean, error: boolean) {
    if (ejecutado) {
        return 'Ejecutado';
    } else if (error) {
        return 'Falló';
    } else {
        return 'Pendiente';
    }
}
