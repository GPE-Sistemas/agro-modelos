"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAplicacionSwagger = exports.IAplicacionValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IAplicacionValidation = joi_1.default.object({
    nombre: joi_1.default.string(),
    urlApiAplicacion: joi_1.default.string(),
    urlApiEntrada: joi_1.default.string()
});
exports.IAplicacionSwagger = (0, joi_to_swagger_1.default)(exports.IAplicacionValidation).swagger;
