"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IApplicationDetailChirpstackDTOSwagger = exports.IApplicationDetailChirpstackDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IApplicationDetailChirpstackDTOValidation = joi_1.default.object({
    application: joi_1.default.object({
        description: joi_1.default.string(),
        id: joi_1.default.string(),
        name: joi_1.default.string(),
        organizationID: joi_1.default.string(),
        payloadCodec: joi_1.default.string(),
        payloadDecoderScript: joi_1.default.string(),
        payloadEncoderScript: joi_1.default.string(),
        serviceProfileID: joi_1.default.string(),
    }),
});
exports.IApplicationDetailChirpstackDTOSwagger = joi_to_swagger_1.default(exports.IApplicationDetailChirpstackDTOValidation).swagger;
