"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRazaDTOSchema = exports.IRazaDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const especie_1 = require("./especie");
exports.IRazaDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    idEspecie: joi_1.default.string(),
    //
    especie: especie_1.IEspecieDTOValidation
});
exports.IRazaDTOSchema = (0, joi_to_swagger_1.default)(exports.IRazaDTOValidation).swagger;
