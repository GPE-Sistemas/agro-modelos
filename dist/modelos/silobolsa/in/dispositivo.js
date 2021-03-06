"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDispositivoSilobolsaSwagger = exports.IDispositivoSilobolsaValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const metadatos_1 = require("../../shared/metadatos");
exports.IDispositivoSilobolsaValidation = joi_1.default.object({
    // Base
    adr: joi_1.default.boolean(),
    deveui: joi_1.default.string().required(),
    deviceName: joi_1.default.string(),
    dr: joi_1.default.number(),
    fCnt: joi_1.default.number(),
    fechaUltimoUplink: joi_1.default.date(),
    metadatos: joi_1.default.array().items(metadatos_1.IMetadatosValidation),
    red: joi_1.default.string(),
    // Especificos Silobolsa
    alarmaActiva: joi_1.default.boolean(),
    idUltimoReporte: joi_1.default.string(),
    fechaAsignacion: joi_1.default.date(),
    idSilobolsa: joi_1.default.string(),
    posicion: joi_1.default.number(),
    alerta: joi_1.default.number(),
});
exports.IDispositivoSilobolsaSwagger = (0, joi_to_swagger_1.default)(exports.IDispositivoSilobolsaValidation).swagger;
