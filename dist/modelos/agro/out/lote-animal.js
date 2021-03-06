"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILoteDTOSwagger = exports.ILoteDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const establecimiento_1 = require("./establecimiento");
exports.ILoteDTOValidation = joi_1.default.object({
    _id: joi_1.default.string().required(),
    nombre: joi_1.default.string().required(),
    idEstablecimiento: joi_1.default.string().required(),
    //
    establecimiento: establecimiento_1.IEstablecimientoDTOValidation,
});
exports.ILoteDTOSwagger = joi_to_swagger_1.default(exports.ILoteDTOValidation).swagger;
