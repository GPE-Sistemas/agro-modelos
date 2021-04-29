"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDispositivoAdminDTOSwagger = exports.IDispositivoAdminDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IDispositivoAdminDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    applicationServerId: joi_1.default.string(),
    deviceName: joi_1.default.string().required(),
    deveui: joi_1.default.string().required(),
    tipo: joi_1.default.string().required(),
    idLote: joi_1.default.string().required(),
    idCliente: joi_1.default.string(),
    deviceProfileId: joi_1.default.string(),
});
exports.IDispositivoAdminDTOSwagger = joi_to_swagger_1.default(exports.IDispositivoAdminDTOValidation).swagger;
