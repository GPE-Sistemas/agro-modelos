"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICorralSwagger = exports.ICorralValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const coordenadas_1 = require("../../shared/coordenadas");
exports.ICorralValidation = joi_1.default.object({
    color: joi_1.default.string(),
    nombre: joi_1.default.string(),
    coordenadas: joi_1.default.array().items(coordenadas_1.ICoordenadasValidation),
    idEstablecimiento: joi_1.default.string(),
});
exports.ICorralSwagger = joi_to_swagger_1.default(exports.ICorralValidation).swagger;
