"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IVacunacionDTOSwagger = exports.IVacunacionDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const animal_1 = require("./animal");
const establecimiento_1 = require("./establecimiento");
const tipoVacuna_1 = require("./tipoVacuna");
exports.IVacunacionDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    idAnimal: joi_1.default.string(),
    idTipoVacuna: joi_1.default.string(),
    idEstablecimiento: joi_1.default.string(),
    fecha: joi_1.default.date(),
    producto: joi_1.default.string(),
    dosis: joi_1.default.string(),
    observaciones: joi_1.default.string(),
    //
    animal: animal_1.IAnimalDTOValidation,
    tipoVacuna: tipoVacuna_1.ITipoVacunaDTOValidation,
    establecimiento: establecimiento_1.IEstablecimientoDTOValidation,
});
exports.IVacunacionDTOSwagger = joi_to_swagger_1.default(exports.IVacunacionDTOValidation).swagger;
