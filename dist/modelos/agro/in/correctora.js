"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICorrectoraSchema = exports.ICorrectoraValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
exports.ICorrectoraValidation = joi_1.default.object().keys({
    numeroSerie: joi_1.default.string().required(),
    deveui: joi_1.default.string().required(),
    modelo: joi_1.default.string(),
    fechaAsignacion: joi_1.default.date(),
    firmware: joi_1.default.string(),
    bateria: joi_1.default.number(),
    activa: joi_1.default.boolean(),
    ubicacion: shared_1.ICoordenadasValidation,
    idEstablecimiento: joi_1.default.string(),
    idLote: joi_1.default.string().allow(null),
});
exports.ICorrectoraSchema = (0, joi_to_swagger_1.default)(exports.ICorrectoraValidation).swagger;
