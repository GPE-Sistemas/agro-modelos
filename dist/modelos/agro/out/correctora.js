"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICorrectoraDTOSchema = exports.ICorrectoraDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const correctoras_1 = require("../../correctoras");
exports.ICorrectoraDTOValidation = joi_1.default.object().keys({
    _id: joi_1.default.string().required(),
    numeroSerie: joi_1.default.string().required(),
    deveui: joi_1.default.string().required(),
    modelo: joi_1.default.string(),
    fechaAsignacion: joi_1.default.date(),
    firmware: joi_1.default.string(),
    bateria: joi_1.default.number(),
    //
    dispositivo: correctoras_1.IDispositivoCorrectoraDTOValidation
});
exports.ICorrectoraDTOSchema = joi_to_swagger_1.default(exports.ICorrectoraDTOValidation).swagger;
