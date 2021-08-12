"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAlertaSwagger = exports.IAlertaValidation = exports.IComentarioAlertaValidation = exports.IReporteAlertaValidation = exports.IEstadoAlertaValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IEstadoAlertaValidation = joi_1.default.object({
    fecha: joi_1.default.string(),
    usuario: joi_1.default.string(),
    estado: joi_1.default.string(),
});
exports.IReporteAlertaValidation = joi_1.default.object({
    deveui: joi_1.default.string(),
    deviceName: joi_1.default.string(),
    fecha: joi_1.default.string(),
    medicion: joi_1.default.string(),
    valor: joi_1.default.number(),
});
exports.IComentarioAlertaValidation = joi_1.default.object({
    fecha: joi_1.default.string(),
    usuario: joi_1.default.string(),
    comentario: joi_1.default.string(),
});
exports.IAlertaValidation = joi_1.default.object({
    aplicacion: joi_1.default.string(),
    nivel: joi_1.default.number(),
    idAsignado: joi_1.default.string(),
    nombreAsignado: joi_1.default.string(),
    tipo: joi_1.default.string().valid('tecnica', 'seguridad', 'reporte'),
    fecha: joi_1.default.date(),
    estadoActual: joi_1.default.string(),
    archivada: joi_1.default.boolean(),
    comentarios: exports.IComentarioAlertaValidation,
    estados: exports.IEstadoAlertaValidation,
    reportes: exports.IReporteAlertaValidation,
    idEstablecimiento: joi_1.default.string(),
});
exports.IAlertaSwagger = joi_to_swagger_1.default(exports.IAlertaValidation).swagger;
