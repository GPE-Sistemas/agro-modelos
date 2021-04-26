"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISubcategoriaDTOSchema = exports.ISubcategoriaDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const categoria_1 = require("./categoria");
exports.ISubcategoriaDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    pesoMin: joi_1.default.number(),
    pesoMax: joi_1.default.number(),
    idCategoria: joi_1.default.string(),
    //
    categoria: categoria_1.ICategoriaDTOValidation
});
exports.ISubcategoriaDTOSchema = joi_to_swagger_1.default(exports.ISubcategoriaDTOValidation).swagger;
