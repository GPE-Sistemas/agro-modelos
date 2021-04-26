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
exports.compareClave = exports.hashClave = exports.httpRequest = exports.crearTokenChirpstack = exports.downlinkLabels = exports.ackLabels = exports.uplinkLabels = exports.filtroBusqueda = exports.getFiltroFromQuery = exports.validateSchema = void 0;
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
function getFiltroFromQuery(queryParams) {
    var _a, _b;
    const keysIgnorar = ['_id', 'page', 'limit', 'sort', 'desde', 'hasta', 'search', 'searchFields'];
    const filtro = {
        _id: queryParams._id,
        desde: +queryParams.desde,
        hasta: +queryParams.hasta,
        page: +queryParams.page || 0,
        limit: +queryParams.limit || 0,
        sort: ((_a = queryParams.sort) === null || _a === void 0 ? void 0 : _a.toString()) || '-fecha',
        search: (_b = queryParams.search) === null || _b === void 0 ? void 0 : _b.toString(),
        searchFields: queryParams.searchFields ? JSON.parse(queryParams.searchFields) : [],
    };
    for (const key in queryParams) {
        if (!keysIgnorar.includes(key)) {
            filtro[key] = queryParams[key];
        }
    }
    return filtro;
}
exports.getFiltroFromQuery = getFiltroFromQuery;
function filtroBusqueda(filtro) {
    var _a;
    const filtroDb = {};
    if (filtro) {
        const keysIgnorar = ['_id', 'page', 'limit', 'sort', 'desde', 'hasta', 'search', 'searchFields'];
        if (filtro === null || filtro === void 0 ? void 0 : filtro._id) {
            filtroDb._id = new mongoose_1.Types.ObjectId(filtro._id);
            return filtroDb;
        }
        if (filtro.desde && filtro.hasta) {
            filtroDb.fecha = { $gte: filtro.desde, $lte: filtro.hasta };
        }
        else if (filtro.desde) {
            filtroDb.fecha = { $gte: filtro.desde };
        }
        else if (filtro.hasta) {
            filtroDb.fecha = { $lte: filtro.hasta };
        }
        if (filtro.search && ((_a = filtro.searchFields) === null || _a === void 0 ? void 0 : _a.length)) {
            filtroDb.$or = [];
            for (const searchField of filtro.searchFields) {
                filtroDb.$or.push({ [searchField]: { $regex: filtro.search, $options: 'i' } });
            }
        }
        for (const key in filtro) {
            if (!keysIgnorar.includes(key)) {
                filtroDb[key] = filtro[key];
            }
        }
    }
    return filtroDb;
}
exports.filtroBusqueda = filtroBusqueda;
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
                timeout: 10000,
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
            const response = yield got_1.default(url, options);
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
