"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IReporteSilobolsaDTOSwagger = exports.IReporteSilobolsaDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IReporteSilobolsaDTOValidation = joi_1.default.object({
    _id: joi_1.default.string().required(),
    deveui: joi_1.default.string().required(),
    idSilobolsa: joi_1.default.string(),
    fecha: joi_1.default.date().required(),
    co2: joi_1.default.number(),
    temperatura: joi_1.default.number(),
    humedad: joi_1.default.number(),
    bateria: joi_1.default.number(),
    // Calculados
    bateriaPorc: joi_1.default.number(),
    co2Porc: joi_1.default.number(),
    humedadPorc: joi_1.default.number(),
    temperaturaGrados: joi_1.default.number(),
    humedadEquilibrio: joi_1.default.number(),
    alertaBateria: joi_1.default.number(),
    alertaCo2: joi_1.default.number(),
    alertaHumedad: joi_1.default.number(),
});
exports.IReporteSilobolsaDTOSwagger = joi_to_swagger_1.default(exports.IReporteSilobolsaDTOValidation).swagger;
