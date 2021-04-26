"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEventoEspecificoDTOSwagger = exports.IEventoEspecificoDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const animal_1 = require("./animal");
exports.IEventoEspecificoDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    idAnimal: joi_1.default.string(),
    fecha: joi_1.default.date(),
    titulo: joi_1.default.string(),
    observaciones: joi_1.default.string(),
    //
    animal: animal_1.IAnimalDTOValidation
});
exports.IEventoEspecificoDTOSwagger = joi_to_swagger_1.default(exports.IEventoEspecificoDTOValidation).swagger;
