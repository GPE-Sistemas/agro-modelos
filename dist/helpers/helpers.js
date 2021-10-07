"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEstadoComando = exports.deveuiValido = exports.compareClave = exports.hashClave = exports.httpRequest = exports.crearTokenChirpstack = exports.downlinkLabels = exports.ackLabels = exports.uplinkLabels = exports.parseQueryFilters = exports.validateSchema = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const got_1 = __importDefault(require("got"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mongoose_1 = require("mongoose");
function validateSchema(dato, schema) {
    var _a, _b, _c;
    const result = schema.validate(dato);
    if (!result.error) {
        return;
    }
    else {
        throw {
            error: result.error,
            status: 400,
            mensaje: (_c = (_b = (_a = result.error) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.message
        };
    }
}
exports.validateSchema = validateSchema;
function getFilterValue(type, value) {
    if (type === 'string') {
        return value;
    }
    else if (type === 'date') {
        return new Date(value);
    }
    else if (type === 'number') {
        return +value;
    }
    else if (type === 'boolean' || type === 'object') {
        try {
            return JSON.parse(value);
        }
        catch (err) {
            return value;
        }
    }
    else if (type === 'regex') {
        return { $regex: value, $options: 'i' };
    }
    else {
        return new mongoose_1.Types.ObjectId(value);
    }
}
function parseQueryFilters(queryParams) {
    var _a;
    const parsedQuery = {
        limit: +((queryParams === null || queryParams === void 0 ? void 0 : queryParams.limit) || 0),
        sort: ((_a = queryParams === null || queryParams === void 0 ? void 0 : queryParams.sort) === null || _a === void 0 ? void 0 : _a.toString()) || '-fecha',
        skip: +((queryParams === null || queryParams === void 0 ? void 0 : queryParams.page) || 0) * +((queryParams === null || queryParams === void 0 ? void 0 : queryParams.limit) || 0),
        filter: {},
    };
    if (typeof (queryParams === null || queryParams === void 0 ? void 0 : queryParams.filter) === 'string') {
        try {
            queryParams.filter = JSON.parse(queryParams.filter);
        }
        catch (err) {
            // nada
        }
    }
    if (typeof (queryParams === null || queryParams === void 0 ? void 0 : queryParams.filter) === 'object') {
        for (const filtro of queryParams.filter) {
            if (typeof filtro.field === 'string') {
                parsedQuery.filter[filtro.field] = getFilterValue(filtro.type, filtro.value);
            }
            else {
                parsedQuery.filter.$or = [];
                for (const field of filtro.field) {
                    parsedQuery.filter.$or.push({ [field]: getFilterValue(filtro.type, filtro.value) });
                }
            }
        }
    }
    return parsedQuery;
}
exports.parseQueryFilters = parseQueryFilters;
function uplinkLabels(uplink) {
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
exports.uplinkLabels = uplinkLabels;
function ackLabels(ack) {
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
exports.ackLabels = ackLabels;
function downlinkLabels(downlink) {
    const labels = {
        deveui: downlink.deveui,
        payload: downlink.payload,
        puerto: downlink.puerto + '',
        red: downlink.red,
        tipo: 'downlink',
    };
    return labels;
}
exports.downlinkLabels = downlinkLabels;
function crearTokenChirpstack(username, jwtSecret) {
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
    return jsonwebtoken_1.default.sign(tokenInfo, jwtSecret);
}
exports.crearTokenChirpstack = crearTokenChirpstack;
function httpRequest(url, method, queryParams, headers, body) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const options = {
                timeout: 60000,
                method: method.toUpperCase(),
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
                }
                else {
                    options.body = body;
                }
            }
            const response = yield (0, got_1.default)(url, options);
            let parsedBody;
            try {
                parsedBody = JSON.parse(response.body);
            }
            catch (err) {
                parsedBody = response.body;
            }
            let reponseHeaders;
            try {
                reponseHeaders = JSON.parse(response.headers);
            }
            catch (err) {
                reponseHeaders = response.headers;
            }
            if (/^2/.test('' + response.statusCode)) {
                return { body: parsedBody, headers: reponseHeaders };
            }
            else {
                throw {
                    error: parsedBody,
                    status: response.statusCode,
                    mensaje: parsedBody.mensaje || parsedBody.message || response.statusMessage
                };
            }
        }
        catch (err) {
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
                        mensaje: `Direccion ${(_a = err.options) === null || _a === void 0 ? void 0 : _a.url} no entontrada`,
                        err
                    };
                }
                case 'ECONNREFUSED': {
                    throw {
                        status: 500,
                        mensaje: `Direccion ${(_b = err.options) === null || _b === void 0 ? void 0 : _b.url} no entontrada`,
                        err
                    };
                }
                default: {
                    throw err;
                }
            }
        }
    });
}
exports.httpRequest = httpRequest;
function hashClave(clave) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.hash(clave, 10);
    });
}
exports.hashClave = hashClave;
function compareClave(clave, hash) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(clave, hash);
    });
}
exports.compareClave = compareClave;
function deveuiValido(deveui) {
    function esHexadecimal(numeroHexadecimal) {
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
exports.deveuiValido = deveuiValido;
function getEstadoComando(ejecutado, error) {
    if (ejecutado) {
        return 'Ejecutado';
    }
    else if (error) {
        return 'Falló';
    }
    else {
        return 'Pendiente';
    }
}
exports.getEstadoComando = getEstadoComando;
