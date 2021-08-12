"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IVacunacionSwagger = exports.IVacunacionValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IVacunacionValidation = joi_1.default.object({
    idAnimal: joi_1.default.string(),
    idTipoVacuna: joi_1.default.string(),
    idEstablecimiento: joi_1.default.string(),
    fecha: joi_1.default.date(),
    producto: joi_1.default.string(),
    dosis: joi_1.default.string(),
    observaciones: joi_1.default.string(),
});
exports.IVacunacionSwagger = joi_to_swagger_1.default(exports.IVacunacionValidation).swagger;
