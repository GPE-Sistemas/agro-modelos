"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IReporteCaravanaDTOSwagger = exports.IReporteCaravanaDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const coordenadas_1 = require("../../shared/coordenadas");
exports.IReporteCaravanaDTOValidation = joi_1.default.object({
    _id: joi_1.default.string().required(),
    deveui: joi_1.default.string().required(),
    fecha: joi_1.default.date().required(),
    idAnimal: joi_1.default.string(),
    ubicacion: coordenadas_1.ICoordenadasValidation,
    dentroCorral: joi_1.default.boolean(),
    dentroEstablecimiento: joi_1.default.boolean(),
});
exports.IReporteCaravanaDTOSwagger = joi_to_swagger_1.default(exports.IReporteCaravanaDTOValidation).swagger;
