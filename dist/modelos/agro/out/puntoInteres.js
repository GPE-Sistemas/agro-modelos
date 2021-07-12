"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPuntoInteresDTOSwagger = exports.IPuntoInteresDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
const icono_1 = require("../in/icono");
exports.IPuntoInteresDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    coordenadas: shared_1.ICoordenadasValidation,
    icono: icono_1.IIconoValidation,
});
exports.IPuntoInteresDTOSwagger = joi_to_swagger_1.default(exports.IPuntoInteresDTOValidation).swagger;
