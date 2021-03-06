"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBajaDTOSwagger = exports.IBajaDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const establecimiento_1 = require("./establecimiento");
const tipoBaja_1 = require("./tipoBaja");
exports.IBajaDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    fecha: joi_1.default.date(),
    idTipoBaja: joi_1.default.string(),
    idAnimal: joi_1.default.string(),
    idEstablecimiento: joi_1.default.string(),
    observaciones: joi_1.default.string(),
    //
    tipoBaja: tipoBaja_1.ITipoBajaDTOValidation,
    establecimiento: establecimiento_1.IEstablecimientoDTOValidation,
});
exports.IBajaDTOSwagger = (0, joi_to_swagger_1.default)(exports.IBajaDTOValidation).swagger;
