"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IClienteDTOSwagger = exports.IClienteDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IClienteDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    admin: joi_1.default.boolean(),
    activo: joi_1.default.boolean(),
    idApplicationServer: joi_1.default.string(),
    networkServerId: joi_1.default.string(),
    organizationId: joi_1.default.string(),
    serviceProfileId: joi_1.default.string(),
    applications: joi_1.default.array().items(joi_1.default.object({
        applicationId: joi_1.default.string(),
        applicationName: joi_1.default.string(),
    })),
    gateways: joi_1.default.array().items(joi_1.default.object({
        gatewayId: joi_1.default.string(),
        gateway: joi_1.default.string(),
    })),
});
exports.IClienteDTOSwagger = joi_to_swagger_1.default(exports.IClienteDTOValidation).swagger;
