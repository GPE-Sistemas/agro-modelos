"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGatewayChirpstackDTOSwagger = exports.IGatewayChirpstackDTOValidation = exports.ICommonLocationValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.ICommonLocationValidation = joi_1.default.object({
    accuracy: joi_1.default.number(),
    altitude: joi_1.default.number(),
    latitude: joi_1.default.number(),
    longitude: joi_1.default.number(),
    source: joi_1.default.string().valid('UNKNOWN', 'GPS', 'CONFIG', 'GEO_RESOLVER_TDOA', 'GEO_RESOLVER_RSSI', 'GEO_RESOLVER_GNSS', 'GEO_RESOLVER_WIFI'),
});
exports.IGatewayChirpstackDTOValidation = joi_1.default.object({
    result: joi_1.default.object({
        createdAt: joi_1.default.string(),
        description: joi_1.default.string(),
        firstSeenAt: joi_1.default.string(),
        id: joi_1.default.string(),
        lastSeenAt: joi_1.default.string(),
        location: exports.ICommonLocationValidation,
        name: joi_1.default.string(),
        networkServerID: joi_1.default.string(),
        networkServerName: joi_1.default.string(),
        organizationID: joi_1.default.string(),
        updatedAt: joi_1.default.string(),
    }),
    totalCount: joi_1.default.string(),
});
exports.IGatewayChirpstackDTOSwagger = joi_to_swagger_1.default(exports.IGatewayChirpstackDTOValidation).swagger;
