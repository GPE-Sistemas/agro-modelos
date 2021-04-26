"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEstablecimientoSwagger = exports.IEstablecimientoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const coordenadas_1 = require("../../shared/coordenadas");
exports.IEstablecimientoValidation = joi_1.default.object().keys({
    nombre: joi_1.default.string().required(),
    coordenadas: joi_1.default.array().items(joi_1.default.array().items(coordenadas_1.ICoordenadasValidation)),
});
exports.IEstablecimientoSwagger = joi_to_swagger_1.default(exports.IEstablecimientoValidation).swagger;
