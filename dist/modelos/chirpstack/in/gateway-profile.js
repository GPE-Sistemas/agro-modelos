"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGatewayProfileChirpstackSwagger = exports.IGatewayProfileChirpstackValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IGatewayProfileChirpstackValidation = joi_1.default.object({
    gatewayProfile: joi_1.default.object({
        channels: joi_1.default.array().items(joi_1.default.number()),
        extraChannels: joi_1.default.array().items(joi_1.default.object({
            bandwidth: joi_1.default.number(),
            bitrate: joi_1.default.number(),
            frequency: joi_1.default.number(),
            modulation: joi_1.default.string().valid('LORA', 'FSK'),
            spreadingFactors: joi_1.default.array().items(joi_1.default.number()),
        })),
        id: joi_1.default.string(),
        name: joi_1.default.string(),
        networkServerID: joi_1.default.string(),
        statsInterval: joi_1.default.string(),
    }),
});
exports.IGatewayProfileChirpstackSwagger = joi_to_swagger_1.default(exports.IGatewayProfileChirpstackValidation).swagger;
