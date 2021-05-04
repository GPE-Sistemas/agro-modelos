"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGatewaySwagger = exports.IGatewayValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
exports.IGatewayValidation = joi_1.default.object({
    idApplicationServer: joi_1.default.string(),
    name: joi_1.default.string(),
    gatewayId: joi_1.default.string(),
    description: joi_1.default.string(),
    organizationId: joi_1.default.string(),
    networkServerId: joi_1.default.string(),
    coordenadas: shared_1.ICoordenadasValidation,
    gpsDiferencial: joi_1.default.boolean(),
});
exports.IGatewaySwagger = joi_to_swagger_1.default(exports.IGatewayValidation).swagger;
