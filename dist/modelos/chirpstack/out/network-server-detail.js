"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.INetworkServerDetailChirpstackDTOSwagger = exports.INetworkServerDetailChirpstackDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.INetworkServerDetailChirpstackDTOValidation = joi_1.default.object({
    createdAt: joi_1.default.string(),
    networkServer: joi_1.default.object({
        caCert: joi_1.default.string(),
        gatewayDiscoveryDR: joi_1.default.number(),
        gatewayDiscoveryEnabled: joi_1.default.boolean(),
        gatewayDiscoveryInterval: joi_1.default.number(),
        gatewayDiscoveryTXFrequency: joi_1.default.number(),
        id: joi_1.default.string(),
        name: joi_1.default.string(),
        routingProfileCACert: joi_1.default.string(),
        routingProfileTLSCert: joi_1.default.string(),
        routingProfileTLSKey: joi_1.default.string(),
        server: joi_1.default.string(),
        tlsCert: joi_1.default.string(),
        tlsKey: joi_1.default.string(),
    }),
    region: joi_1.default.string(),
    updatedAt: joi_1.default.string(),
    version: joi_1.default.string(),
});
exports.INetworkServerDetailChirpstackDTOSwagger = joi_to_swagger_1.default(exports.INetworkServerDetailChirpstackDTOValidation).swagger;
