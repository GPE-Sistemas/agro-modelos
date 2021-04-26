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
    applicationServerId: joi_1.default.string(),
    networkServerId: joi_1.default.string(),
    organizationId: joi_1.default.string(),
    serviceProfileId: joi_1.default.string(),
});
exports.IClienteSwagger = joi_to_swagger_1.default(exports.IClienteValidation).swagger;
