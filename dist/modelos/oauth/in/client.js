"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IClientSwagger = exports.IClientValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IClientValidation = joi_1.default.object({
    clientId: joi_1.default.string(),
    clientSecret: joi_1.default.string(),
    grants: joi_1.default.array().items(joi_1.default.string()),
    redirectUris: joi_1.default.array().items(joi_1.default.string()),
});
exports.IClientSwagger = (0, joi_to_swagger_1.default)(exports.IClientValidation).swagger;
