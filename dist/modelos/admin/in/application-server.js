"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IApplicationServerSwagger = exports.IApplicationServerValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IApplicationServerValidation = joi_1.default.object({
    nombre: joi_1.default.string().required(),
    url: joi_1.default.string().required(),
    tipo: joi_1.default.string().required().valid('Chirpstack', 'Orbiwise', 'Actility', 'WMC'),
    config: joi_1.default.object(),
});
exports.IApplicationServerSwagger = joi_to_swagger_1.default(exports.IApplicationServerValidation).swagger;
