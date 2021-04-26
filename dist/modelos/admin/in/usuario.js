"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUsuarioSwagger = exports.IUsuarioValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IUsuarioValidation = joi_1.default.object({
    usuario: joi_1.default.string().required(),
    clave: joi_1.default.string().required(),
    idCliente: joi_1.default.string().required(),
    nombre: joi_1.default.string(),
    apellido: joi_1.default.string(),
    notificacionesActivas: joi_1.default.boolean(),
    notificaciones: {
        telegram: joi_1.default.boolean(),
        whatsapp: joi_1.default.boolean(),
        email: joi_1.default.boolean(),
    },
    email: joi_1.default.string(),
    telefono: joi_1.default.string(),
});
exports.IUsuarioSwagger = joi_to_swagger_1.default(exports.IUsuarioValidation).swagger;
