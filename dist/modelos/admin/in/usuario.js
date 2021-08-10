"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUsuarioSwagger = exports.IUsuarioValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IUsuarioValidation = joi_1.default.object({
    usuario: joi_1.default.string(),
    clave: joi_1.default.string(),
    idCliente: joi_1.default.string(),
    nombre: joi_1.default.string(),
    apellido: joi_1.default.string(),
    notificacionesActivas: joi_1.default.boolean(),
    notificaciones: {
        telegram: joi_1.default.array().items(joi_1.default.string()),
        whatsapp: joi_1.default.array().items(joi_1.default.string()),
        email: joi_1.default.array().items(joi_1.default.string()),
        sms: joi_1.default.array().items(joi_1.default.string()),
    },
    telegramChatId: joi_1.default.string().allow(''),
    email: joi_1.default.string().allow(''),
    telefono: joi_1.default.string().allow(''),
});
exports.IUsuarioSwagger = joi_to_swagger_1.default(exports.IUsuarioValidation).swagger;
