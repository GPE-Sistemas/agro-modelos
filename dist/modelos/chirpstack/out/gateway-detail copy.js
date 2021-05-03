"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGatewayDetailChirpstackDTOSwagger = exports.IGatewayDetailChirpstackDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const gateway_1 = require("./gateway");
exports.IGatewayDetailChirpstackDTOValidation = joi_1.default.object({
    createdAt: joi_1.default.string(),
    firstSeenAt: joi_1.default.string(),
    gateway: joi_1.default.object({
        boards: joi_1.default.array().items(joi_1.default.object({
            fineTimestampKey: joi_1.default.string(),
            fpgaID: joi_1.default.string(),
        })),
        description: joi_1.default.object(),
        discoveryEnabled: joi_1.default.boolean(),
        gatewayProfileID: joi_1.default.object(),
        id: joi_1.default.object(),
        location: gateway_1.ICommonLocationValidation,
        metadata: joi_1.default.object(),
        name: joi_1.default.object(),
        networkServerID: joi_1.default.object(),
        organizationID: joi_1.default.object(),
        tags: joi_1.default.object(),
    }),
    lastSeenAt: joi_1.default.string(),
    updatedAt: joi_1.default.string(),
});
exports.IGatewayDetailChirpstackDTOSwagger = joi_to_swagger_1.default(exports.IGatewayDetailChirpstackDTOValidation).swagger;
