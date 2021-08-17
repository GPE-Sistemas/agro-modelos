"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISensorNivelDTOSwagger = exports.ISensorNivelDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
const establecimiento_1 = require("./establecimiento");
const lote_1 = require("./lote");
exports.ISensorNivelDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    activo: joi_1.default.boolean(),
    deveui: joi_1.default.string(),
    fechaAsignacion: joi_1.default.date(),
    ubicacion: shared_1.ICoordenadasValidation,
    idEstablecimiento: joi_1.default.string(),
    idLote: joi_1.default.string(),
    nombre: joi_1.default.string(),
    offset: joi_1.default.number(),
    //
    establecimiento: establecimiento_1.IEstablecimientoDTOValidation,
    lote: lote_1.ILoteDTOValidation
});
exports.ISensorNivelDTOSwagger = joi_to_swagger_1.default(exports.ISensorNivelDTOValidation).swagger;
