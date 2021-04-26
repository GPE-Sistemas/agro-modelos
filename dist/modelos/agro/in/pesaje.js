"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPesajeSwagger = exports.IPesajeValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IPesajeValidation = joi_1.default.object({
    idAnimal: joi_1.default.string(),
    fecha: joi_1.default.date(),
    peso: joi_1.default.number(),
    observaciones: joi_1.default.string(),
});
exports.IPesajeSwagger = joi_to_swagger_1.default(exports.IPesajeValidation).swagger;
