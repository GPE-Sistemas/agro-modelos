"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.INetworkServerChirpstackDTOSwagger = exports.INetworkServerChirpstackDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.INetworkServerChirpstackDTOValidation = joi_1.default.object({
    result: joi_1.default.object({
        createdAt: joi_1.default.string(),
        id: joi_1.default.string(),
        name: joi_1.default.string(),
        server: joi_1.default.string(),
        updatedAt: joi_1.default.string(),
    }),
    totalCount: joi_1.default.string(),
});
exports.INetworkServerChirpstackDTOSwagger = joi_to_swagger_1.default(exports.INetworkServerChirpstackDTOValidation).swagger;
