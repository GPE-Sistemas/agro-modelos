"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICorrectoraDTOSchema = exports.ICorrectoraDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const correctoras_1 = require("../../correctoras");
const shared_1 = require("../../shared");
const establecimiento_1 = require("./establecimiento");
const lote_1 = require("./lote");
exports.ICorrectoraDTOValidation = joi_1.default.object().keys({
    _id: joi_1.default.string().required(),
    numeroSerie: joi_1.default.string().required(),
    deveui: joi_1.default.string().required(),
    modelo: joi_1.default.string(),
    fechaAsignacion: joi_1.default.date(),
    firmware: joi_1.default.string(),
    bateria: joi_1.default.number(),
    activa: joi_1.default.boolean(),
    ubicacion: shared_1.ICoordenadasValidation,
    idEstablecimiento: joi_1.default.string(),
    idLote: joi_1.default.string(),
    //
    dispositivo: correctoras_1.IDispositivoCorrectoraDTOValidation,
    establecimiento: establecimiento_1.IEstablecimientoDTOValidation,
    lote: lote_1.ILoteDTOValidation,
});
exports.ICorrectoraDTOSchema = joi_to_swagger_1.default(exports.ICorrectoraDTOValidation).swagger;
