"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEspecieSwagger = exports.IEspecieValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const icono_1 = require("./icono");
exports.IEspecieValidation = joi_1.default.object({
    nombre: joi_1.default.string(),
    icono: icono_1.IIconoValidation,
    iconoFueraCorral: icono_1.IIconoValidation,
    iconoFueraEstablecimiento: icono_1.IIconoValidation,
});
exports.IEspecieSwagger = joi_to_swagger_1.default(exports.IEspecieValidation).swagger;
