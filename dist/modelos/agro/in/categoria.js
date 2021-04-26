"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICategoriaSchema = exports.ICategoriaValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.ICategoriaValidation = joi_1.default.object({
    nombre: joi_1.default.string(),
    idEspecie: joi_1.default.string(),
    sexo: joi_1.default.boolean(),
    edadMinMeses: joi_1.default.number(),
    edadMaxMeses: joi_1.default.number(),
});
exports.ICategoriaSchema = joi_to_swagger_1.default(exports.ICategoriaValidation).swagger;
