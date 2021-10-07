"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOperarioDTOSwagger = exports.IOperarioDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const permisos_1 = require("../in/permisos");
exports.IOperarioDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    idUsuario: joi_1.default.string(),
    permisos: permisos_1.IPermisoValidation,
});
exports.IOperarioDTOSwagger = (0, joi_to_swagger_1.default)(exports.IOperarioDTOValidation).swagger;
