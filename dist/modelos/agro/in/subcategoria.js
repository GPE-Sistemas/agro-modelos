"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISubcategoriaSchema = exports.ISubcategoriaValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.ISubcategoriaValidation = joi_1.default.object({
    nombre: joi_1.default.string(),
    pesoMin: joi_1.default.number(),
    pesoMax: joi_1.default.number(),
    idCategoria: joi_1.default.string(),
});
exports.ISubcategoriaSchema = (0, joi_to_swagger_1.default)(exports.ISubcategoriaValidation).swagger;
