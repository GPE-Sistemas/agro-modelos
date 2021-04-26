"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGatewayChirpstackSwagger = exports.IGatewayChirpstackValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IGatewayChirpstackValidation = joi_1.default.object({
    gateway: joi_1.default.object({
        boards: joi_1.default.array().items(joi_1.default.object({
            fineTimestampKey: joi_1.default.string(),
            fpgaID: joi_1.default.string(),
        })),
        description: joi_1.default.string(),
        discoveryEnabled: joi_1.default.boolean(),
        gatewayProfileID: joi_1.default.string(),
        id: joi_1.default.string(),
        location: joi_1.default.object({
            accuracy: joi_1.default.number(),
            altitude: joi_1.default.number(),
            latitude: joi_1.default.number(),
            longitude: joi_1.default.number(),
            source: joi_1.default.string().valid('UNKNOWN', 'GPS', 'CONFIG', 'GEO_RESOLVER_TDOA', 'GEO_RESOLVER_RSSI', 'GEO_RESOLVER_GNSS', 'GEO_RESOLVER_WIFI'),
        }),
        metadata: joi_1.default.object(),
        name: joi_1.default.string(),
        networkServerID: joi_1.default.string(),
        organizationID: joi_1.default.string(),
        tags: joi_1.default.object(),
    }),
});
exports.IGatewayChirpstackSwagger = joi_to_swagger_1.default(exports.IGatewayChirpstackValidation).swagger;
