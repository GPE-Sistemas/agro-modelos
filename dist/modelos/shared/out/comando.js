"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IComandoDTOSwagger = exports.IComandoDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IComandoDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    deveui: joi_1.default.string(),
    payload: joi_1.default.string(),
    puerto: joi_1.default.number(),
    ejecutado: joi_1.default.boolean(),
    error: joi_1.default.boolean(),
    timestamp: joi_1.default.date(),
    usuario: joi_1.default.object({
        _id: joi_1.default.string(),
        email: joi_1.default.string()
    }),
    fCnt: joi_1.default.string(),
    //
    estado: joi_1.default.string(),
    comando: joi_1.default.string()
});
exports.IComandoDTOSwagger = joi_to_swagger_1.default(exports.IComandoDTOValidation).swagger;
