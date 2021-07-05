"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBajaSwagger = exports.IBajaValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IBajaValidation = joi_1.default.object({
    fecha: joi_1.default.date(),
    idAnimal: joi_1.default.string(),
    idTipoBaja: joi_1.default.string(),
    observaciones: joi_1.default.string(),
});
exports.IBajaSwagger = joi_to_swagger_1.default(exports.IBajaValidation).swagger;
