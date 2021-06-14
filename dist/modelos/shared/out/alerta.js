"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAlertaDTOSwagger = exports.IAlertaDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const alerta_1 = require("../in/alerta");
exports.IAlertaDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    aplicacion: joi_1.default.string(),
    nivel: joi_1.default.number(),
    idAsignado: joi_1.default.string(),
    nombreAsignado: joi_1.default.string(),
    tipo: joi_1.default.string().valid('tecnica', 'seguridad', 'reporte'),
    fecha: joi_1.default.date(),
    estadoActual: joi_1.default.string(),
    archivada: joi_1.default.boolean(),
    comentarios: alerta_1.IComentarioAlertaValidation,
    estados: alerta_1.IEstadoAlertaValidation,
    reportes: alerta_1.IReporteAlertaValidation,
});
exports.IAlertaDTOSwagger = joi_to_swagger_1.default(exports.IAlertaDTOValidation).swagger;
