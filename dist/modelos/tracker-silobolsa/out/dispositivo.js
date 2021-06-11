"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDispositivoTrackerSilobolsaDTOSwagger = exports.IDispositivoTrackerSilobolsaDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const metadatos_1 = require("../../shared/metadatos");
const reporte_1 = require("./reporte");
exports.IDispositivoTrackerSilobolsaDTOValidation = joi_1.default.object({
    // Base
    _id: joi_1.default.string().required(),
    adr: joi_1.default.boolean(),
    deveui: joi_1.default.string().required(),
    deviceName: joi_1.default.string(),
    dr: joi_1.default.number(),
    fCnt: joi_1.default.number(),
    fechaUltimoUplink: joi_1.default.date(),
    metadatos: joi_1.default.array().items(metadatos_1.IMetadatosValidation),
    red: joi_1.default.string(),
    // Especificos Silobolsa
    fechaAsignacion: joi_1.default.date(),
    idUltimoReporte: joi_1.default.string(),
    idSilobolsa: joi_1.default.string(),
    posicion: joi_1.default.number(),
    firmware: joi_1.default.string(),
    sensibilidad: joi_1.default.number(),
    //
    ultimoReporte: reporte_1.IReporteTrackerSilobolsaDTOValidation,
});
exports.IDispositivoTrackerSilobolsaDTOSwagger = joi_to_swagger_1.default(exports.IDispositivoTrackerSilobolsaDTOValidation).swagger;
