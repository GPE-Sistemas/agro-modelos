"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICategoriaDTOSchema = exports.ICategoriaDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const icono_1 = require("../in/icono");
const especie_1 = require("./especie");
exports.ICategoriaDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    idEspecie: joi_1.default.string(),
    sexo: joi_1.default.boolean(),
    icono: icono_1.IIconoValidation,
    iconoFueraCorral: icono_1.IIconoValidation,
    iconoFueraEstablecimiento: icono_1.IIconoValidation,
    //
    especie: especie_1.IEspecieDTOValidation
});
exports.ICategoriaDTOSchema = joi_to_swagger_1.default(exports.ICategoriaDTOValidation).swagger;
