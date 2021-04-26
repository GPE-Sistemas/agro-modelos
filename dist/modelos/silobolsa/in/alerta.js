"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAlertaSilobolsaSwagger = exports.IAlertaSilobolsaValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IAlertaSilobolsaValidation = joi_1.default.object({
    codigo: joi_1.default.number(),
    nivel: joi_1.default.number(),
    valor: joi_1.default.number(),
    fecha: joi_1.default.date(),
    deveui: joi_1.default.string(),
    idSilobolsa: joi_1.default.string(),
    archivada: joi_1.default.boolean(),
});
exports.IAlertaSilobolsaSwagger = joi_to_swagger_1.default(exports.IAlertaSilobolsaValidation).swagger;
