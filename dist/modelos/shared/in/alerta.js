"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAlertaSwagger = exports.IAlertaValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IAlertaValidation = joi_1.default.object({
    aplicacion: joi_1.default.string(),
    mensaje: joi_1.default.string(),
    mensajeCorto: joi_1.default.string(),
    nivel: joi_1.default.number(),
    valor: joi_1.default.string(),
    deveui: joi_1.default.string(),
    deviceName: joi_1.default.string(),
    idAsignado: joi_1.default.string(),
    nombreAsignado: joi_1.default.string(),
    archivada: joi_1.default.boolean(),
    comentarios: joi_1.default.array().items(joi_1.default.object({
        fecha: joi_1.default.string(),
        usuario: joi_1.default.string(),
        comentario: joi_1.default.string(),
    })),
    fecha: joi_1.default.date(),
    estadoActual: joi_1.default.string(),
    estados: joi_1.default.array().items(joi_1.default.object({
        fecha: joi_1.default.string(),
        usuario: joi_1.default.string(),
        estado: joi_1.default.string(),
    })),
});
exports.IAlertaSwagger = joi_to_swagger_1.default(exports.IAlertaValidation).swagger;