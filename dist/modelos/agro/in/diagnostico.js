"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDiagnosticoSwagger = exports.IDiagnosticoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IDiagnosticoValidation = joi_1.default.object({
    nombre: joi_1.default.string(),
});
exports.IDiagnosticoSwagger = joi_to_swagger_1.default(exports.IDiagnosticoValidation).swagger;
