"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILoteAnimalSwagger = exports.ILoteAnimalValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.ILoteAnimalValidation = joi_1.default.object({
    nombre: joi_1.default.string().required(),
    idEstablecimiento: joi_1.default.string().required(),
});
exports.ILoteAnimalSwagger = joi_to_swagger_1.default(exports.ILoteAnimalValidation).swagger;
