"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDispositivoCorrectoraSwagger = exports.IDispositivoCorrectoraValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const metadatos_1 = require("../../shared/metadatos");
exports.IDispositivoCorrectoraValidation = joi_1.default.object({
    // Base
    adr: joi_1.default.boolean(),
    deveui: joi_1.default.string().required(),
    deviceName: joi_1.default.string(),
    dr: joi_1.default.number(),
    fCnt: joi_1.default.number(),
    fechaUltimoUplink: joi_1.default.date(),
    metadatos: joi_1.default.array().items(metadatos_1.IMetadatosValidation),
    red: joi_1.default.string(),
    // Especificos Correctoras
    firmware: joi_1.default.string(),
    fechaAsignacion: joi_1.default.date(),
    numeroSerieCorrectora: joi_1.default.string(),
    idUltimoReporte: joi_1.default.string(),
});
exports.IDispositivoCorrectoraSwagger = joi_to_swagger_1.default(exports.IDispositivoCorrectoraValidation).swagger;
