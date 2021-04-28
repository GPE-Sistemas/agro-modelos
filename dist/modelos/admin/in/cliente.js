"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IClienteSwagger = exports.IClienteValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IClienteValidation = joi_1.default.object({
    nombre: joi_1.default.string().required(),
    applicationServerId: joi_1.default.string().allow(''),
    networkServerId: joi_1.default.string().allow(''),
    organizationId: joi_1.default.string().allow(''),
    serviceProfileId: joi_1.default.string().allow(''),
});
exports.IClienteSwagger = joi_to_swagger_1.default(exports.IClienteValidation).swagger;
