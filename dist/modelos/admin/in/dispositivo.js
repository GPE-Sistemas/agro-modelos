"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDispositivoAdminSwagger = exports.IDispositivoAdminValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IDispositivoAdminValidation = joi_1.default.object({
    idApplicationServer: joi_1.default.string(),
    deveui: joi_1.default.string().length(16).required(),
    deviceName: joi_1.default.string().required(),
    appkey: joi_1.default.string().allow(...['', null]),
    tipo: joi_1.default.string().required(),
    idLote: joi_1.default.string().required(),
    idCliente: joi_1.default.string().allow(''),
    deviceProfileId: joi_1.default.string().allow(''),
});
exports.IDispositivoAdminSwagger = joi_to_swagger_1.default(exports.IDispositivoAdminValidation).swagger;
