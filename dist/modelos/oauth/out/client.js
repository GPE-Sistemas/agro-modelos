"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IClientDTOSwagger = exports.IClientDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IClientDTOValidation = joi_1.default.object({
    id: joi_1.default.string(),
    grants: joi_1.default.array().items(joi_1.default.string()),
    redirectUris: joi_1.default.array().items(joi_1.default.string()),
});
exports.IClientDTOSwagger = (0, joi_to_swagger_1.default)(exports.IClientDTOValidation).swagger;
