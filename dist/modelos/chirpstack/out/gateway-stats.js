"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGatewayStatsChirpstackDTOSwagger = exports.IGatewayStatsChirpstackDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IGatewayStatsChirpstackDTOValidation = joi_1.default.object({
    result: joi_1.default.object({
        rxPacketsReceived: joi_1.default.number(),
        rxPacketsReceivedOK: joi_1.default.number(),
        timestamp: joi_1.default.string(),
        txPacketsEmitted: joi_1.default.number(),
        txPacketsReceived: joi_1.default.number(),
    })
});
exports.IGatewayStatsChirpstackDTOSwagger = joi_to_swagger_1.default(exports.IGatewayStatsChirpstackDTOValidation).swagger;
