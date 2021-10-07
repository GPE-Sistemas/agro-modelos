"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IApplicationChirpstackDTOSwagger = exports.IApplicationChirpstackDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IApplicationChirpstackDTOValidation = joi_1.default.object({
    result: joi_1.default.object({
        description: joi_1.default.string(),
        id: joi_1.default.string(),
        name: joi_1.default.string(),
        organizationID: joi_1.default.string(),
        serviceProfileID: joi_1.default.string(),
        serviceProfileName: joi_1.default.string(),
    }),
    totalCount: joi_1.default.string(),
});
exports.IApplicationChirpstackDTOSwagger = (0, joi_to_swagger_1.default)(exports.IApplicationChirpstackDTOValidation).swagger;
