"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOperarioSwagger = exports.IOperarioValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const admin_1 = require("../../admin");
const permisos_1 = require("./permisos");
exports.IOperarioValidation = admin_1.IUsuarioValidation.keys({
    idUsuario: joi_1.default.string(),
    permisos: permisos_1.IPermisoValidation,
});
exports.IOperarioSwagger = joi_to_swagger_1.default(exports.IOperarioValidation).swagger;
