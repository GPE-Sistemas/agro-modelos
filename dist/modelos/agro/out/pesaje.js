"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPesajeDTOSwagger = exports.IPesajeDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const animal_1 = require("./animal");
const establecimiento_1 = require("./establecimiento");
exports.IPesajeDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    idAnimal: joi_1.default.string(),
    idEstablecimiento: joi_1.default.string(),
    fecha: joi_1.default.date(),
    peso: joi_1.default.number(),
    observaciones: joi_1.default.string(),
    //
    animal: animal_1.IAnimalDTOValidation,
    establecimiento: establecimiento_1.IEstablecimientoDTOValidation,
});
exports.IPesajeDTOSwagger = (0, joi_to_swagger_1.default)(exports.IPesajeDTOValidation).swagger;
