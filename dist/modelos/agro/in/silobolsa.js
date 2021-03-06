"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISilobolsaSwagger = exports.ISilobolsaValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
exports.ISilobolsaValidation = joi_1.default.object({
    idEstablecimiento: joi_1.default.string().required(),
    idLote: joi_1.default.string().allow(null),
    deveuiLanzas: joi_1.default.array().items(joi_1.default.string()),
    deveuiTrackers: joi_1.default.array().items(joi_1.default.string()),
    numero: joi_1.default.string().required(),
    metros: joi_1.default.number().required(),
    especie: joi_1.default.string().required(),
    cosecha: joi_1.default.string().required(),
    producto: joi_1.default.string().required(),
    fechaConfeccion: joi_1.default.date().required(),
    humedadConfeccion: joi_1.default.number(),
    activa: joi_1.default.boolean(),
    fechaDesmantelacion: joi_1.default.date(),
    ubicacion: shared_1.ICoordenadasValidation,
    tas: joi_1.default.number(),
});
exports.ISilobolsaSwagger = (0, joi_to_swagger_1.default)(exports.ISilobolsaValidation).swagger;
