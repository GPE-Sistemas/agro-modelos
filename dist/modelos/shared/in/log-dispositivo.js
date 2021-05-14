"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILogDispositivoSwagger = exports.ILogDispositivoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.ILogDispositivoValidation = joi_1.default.object({
    fecha: joi_1.default.date(),
    deveui: joi_1.default.string(),
    puerto: joi_1.default.number(),
    payload: joi_1.default.string(),
    evento: joi_1.default.string(),
    contenido: joi_1.default.string(),
    fCnt: joi_1.default.number(),
    deviceName: joi_1.default.string(),
    aplicacion: joi_1.default.string(),
});
exports.ILogDispositivoSwagger = joi_to_swagger_1.default(exports.ILogDispositivoValidation).swagger;
