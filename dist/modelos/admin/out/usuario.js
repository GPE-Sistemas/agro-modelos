"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUsuarioDTOSwagger = exports.IUsuarioDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const aplicacion_1 = require("./aplicacion");
const cliente_1 = require("./cliente");
exports.IUsuarioDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    activo: joi_1.default.boolean(),
    usuario: joi_1.default.string().required(),
    idCliente: joi_1.default.string().required(),
    rol: joi_1.default.string(),
    nombre: joi_1.default.string(),
    apellido: joi_1.default.string(),
    notificacionesActivas: joi_1.default.boolean(),
    notificaciones: {
        telegram: joi_1.default.string(),
        whatsapp: joi_1.default.boolean(),
        email: joi_1.default.boolean(),
        sms: joi_1.default.boolean(),
    },
    email: joi_1.default.string(),
    telefono: joi_1.default.string(),
    //
    cliente: cliente_1.IClienteDTOValidation,
    aplicaciones: aplicacion_1.IAplicacionDTOValidation,
});
exports.IUsuarioDTOSwagger = joi_to_swagger_1.default(exports.IUsuarioDTOValidation).swagger;
