"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITokenDTOSwagger = exports.ITokenDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const admin_1 = require("../../admin");
const client_1 = require("./client");
exports.ITokenDTOValidation = joi_1.default.object({
    accessToken: joi_1.default.string(),
    accessTokenExpiresAt: joi_1.default.date(),
    refreshToken: joi_1.default.string(),
    refreshTokenExpiresAt: joi_1.default.date(),
    scope: joi_1.default.array().items(joi_1.default.string()),
    client: client_1.IClientDTOValidation,
    user: admin_1.IUsuarioDTOValidation,
});
exports.ITokenDTOSwagger = (0, joi_to_swagger_1.default)(exports.ITokenDTOValidation).swagger;
