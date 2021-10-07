"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGrupoDTOSwagger = exports.IGrupoDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const establecimiento_1 = require("./establecimiento");
exports.IGrupoDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    idEstablecimiento: joi_1.default.string(),
    //
    establecimiento: establecimiento_1.IEstablecimientoDTOValidation,
});
exports.IGrupoDTOSwagger = (0, joi_to_swagger_1.default)(exports.IGrupoDTOValidation).swagger;
