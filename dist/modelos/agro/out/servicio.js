"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IServicioDTOSchema = exports.IServicioDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const animal_1 = require("./animal");
const establecimiento_1 = require("./establecimiento");
exports.IServicioDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    idAnimal: joi_1.default.string(),
    idEstablecimiento: joi_1.default.string(),
    fechaInicio: joi_1.default.date(),
    fechaFin: joi_1.default.date(),
    observaciones: joi_1.default.string(),
    //
    animal: animal_1.IAnimalDTOValidation,
    establecimiento: establecimiento_1.IEstablecimientoDTOValidation,
});
exports.IServicioDTOSchema = (0, joi_to_swagger_1.default)(exports.IServicioDTOValidation).swagger;
