"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISensorNivelSwagger = exports.ISensorNivelValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
const sensor_nivel_1 = require("../../sensor-nivel");
exports.ISensorNivelValidation = joi_1.default.object({
    activo: joi_1.default.boolean(),
    deveui: joi_1.default.string(),
    fechaCreacion: joi_1.default.date(),
    ubicacion: shared_1.ICoordenadasValidation,
    idEstablecimiento: joi_1.default.string(),
    idLote: joi_1.default.string(),
    nombre: joi_1.default.string(),
    offset: joi_1.default.number(),
    ultimoReporte: sensor_nivel_1.IReporteSensorNivelValidation,
});
exports.ISensorNivelSwagger = (0, joi_to_swagger_1.default)(exports.ISensorNivelValidation).swagger;
