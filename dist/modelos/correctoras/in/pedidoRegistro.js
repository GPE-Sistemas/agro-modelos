"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPedidoReporteSchema = exports.IPedidoReporteValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IPedidoReporteValidation = joi_1.default.object().keys({
    numeroSerie: joi_1.default.string().required(),
    timestamp: joi_1.default.date().required(),
    aplicado: joi_1.default.boolean().required(),
    fechaCreacion: joi_1.default.date().required(),
});
exports.IPedidoReporteSchema = joi_to_swagger_1.default(exports.IPedidoReporteValidation).swagger;
