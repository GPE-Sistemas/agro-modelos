"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAlertaCaravanaDTOSwagger = exports.IAlertaCaravanaDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const dispositivo_1 = require("./dispositivo");
exports.IAlertaCaravanaDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    codigo: joi_1.default.number(),
    fecha: joi_1.default.date(),
    deveui: joi_1.default.string(),
    idAsignado: joi_1.default.string(),
    //
    dispositivo: dispositivo_1.IDispositivoCaravanaDTOValidation,
    //
    descripcion: joi_1.default.string(),
});
exports.IAlertaCaravanaDTOSwagger = joi_to_swagger_1.default(exports.IAlertaCaravanaDTOValidation).swagger;
