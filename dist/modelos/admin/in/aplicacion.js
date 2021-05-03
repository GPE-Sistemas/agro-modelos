"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAplicacionSwagger = exports.IAplicacionValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IAplicacionValidation = joi_1.default.object({
    nombre: joi_1.default.string(),
    urlsApiAplicacion: joi_1.default.object({
        uplink: joi_1.default.string(),
        ack: joi_1.default.string(),
        join: joi_1.default.string(),
    }),
    urlApiEntrada: joi_1.default.string()
});
exports.IAplicacionSwagger = joi_to_swagger_1.default(exports.IAplicacionValidation).swagger;
