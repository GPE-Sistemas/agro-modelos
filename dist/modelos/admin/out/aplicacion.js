"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAplicacionDTOSwagger = exports.IAplicacionDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IAplicacionDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    urlsApiAplicacion: joi_1.default.object({
        evento: joi_1.default.string(),
        uplink: joi_1.default.string(),
        ack: joi_1.default.string(),
        join: joi_1.default.string(),
    }).unknown(true),
    urlsApiEntrada: joi_1.default.object({
        chirpstack: joi_1.default.object({
            evento: joi_1.default.string(),
        }),
        orbiwise: joi_1.default.object({
            uplink: joi_1.default.string(),
            ack: joi_1.default.string(),
            join: joi_1.default.string(),
        }),
    }).unknown(true)
});
exports.IAplicacionDTOSwagger = joi_to_swagger_1.default(exports.IAplicacionDTOValidation).swagger;