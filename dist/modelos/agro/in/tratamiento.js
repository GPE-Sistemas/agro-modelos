"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITratamientoSwagger = exports.ITratamientoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.ITratamientoValidation = joi_1.default.object({
    idAnimal: joi_1.default.string(),
    idDiagnostico: joi_1.default.string(),
    idTipoTratamiento: joi_1.default.string(),
    fecha: joi_1.default.date(),
    producto: joi_1.default.string(),
    observaciones: joi_1.default.string(),
});
exports.ITratamientoSwagger = joi_to_swagger_1.default(exports.ITratamientoValidation).swagger;
