"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISilobolsaDTOSwagger = exports.ISilobolsaDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const dispositivo_1 = require("../../silobolsa/out/dispositivo");
const establecimiento_1 = require("./establecimiento");
const lote_silobolsa_1 = require("./lote-silobolsa");
exports.ISilobolsaDTOValidation = joi_1.default.object({
    _id: joi_1.default.string().required(),
    idEstablecimiento: joi_1.default.string().required(),
    idLote: joi_1.default.string(),
    deveuiDispositivos: joi_1.default.array().items(joi_1.default.string()),
    numero: joi_1.default.string().required(),
    metros: joi_1.default.number().required(),
    especie: joi_1.default.string().required(),
    cosecha: joi_1.default.string().required(),
    producto: joi_1.default.string().required(),
    fechaConfeccion: joi_1.default.date().required(),
    //
    dispositivos: joi_1.default.array().items(dispositivo_1.IDispositivoSilobolsaDTOValidation),
    establecimiento: establecimiento_1.IEstablecimientoDTOValidation,
    lote: lote_silobolsa_1.ILoteSilobolsaDTOValidation,
});
exports.ISilobolsaDTOSwagger = joi_to_swagger_1.default(exports.ISilobolsaDTOValidation).swagger;
