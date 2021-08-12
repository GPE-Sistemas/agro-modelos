"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISensorNivelSwagger = exports.ISensorNivelValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
exports.ISensorNivelValidation = joi_1.default.object({
    activo: joi_1.default.boolean(),
    deveui: joi_1.default.string(),
    fechaAsignacion: joi_1.default.date(),
    ubicacion: shared_1.ICoordenadasValidation,
    idEstablecimiento: joi_1.default.string(),
    idLote: joi_1.default.string(),
});
exports.ISensorNivelSwagger = joi_to_swagger_1.default(exports.ISensorNivelValidation).swagger;
