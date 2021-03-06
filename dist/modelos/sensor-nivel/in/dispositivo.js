"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDispositivoSensorNivelSwagger = exports.IDispositivoSensorNivelValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
const metadatos_1 = require("../../shared/metadatos");
exports.IDispositivoSensorNivelValidation = joi_1.default.object({
    // Base
    adr: joi_1.default.boolean(),
    deveui: joi_1.default.string().required(),
    deviceName: joi_1.default.string(),
    dr: joi_1.default.number(),
    fCnt: joi_1.default.number(),
    fechaUltimoUplink: joi_1.default.date(),
    metadatos: joi_1.default.array().items(metadatos_1.IMetadatosValidation),
    red: joi_1.default.string(),
    // Especificos SensorNivel
    idUltimoReporte: joi_1.default.string(),
    ubicacion: shared_1.ICoordenadasValidation,
    firmware: joi_1.default.string(),
    fechaAsignacion: joi_1.default.date(),
    idAsignado: joi_1.default.string(),
});
exports.IDispositivoSensorNivelSwagger = (0, joi_to_swagger_1.default)(exports.IDispositivoSensorNivelValidation).swagger;
