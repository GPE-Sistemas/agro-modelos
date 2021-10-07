"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOrganizationChirpstackSwagger = exports.IOrganizationChirpstackValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IOrganizationChirpstackValidation = joi_1.default.object({
    organization: joi_1.default.object({
        canHaveGateways: joi_1.default.boolean(),
        displayName: joi_1.default.string(),
        id: joi_1.default.string(),
        maxDeviceCount: joi_1.default.number(),
        maxGatewayCount: joi_1.default.number(),
        name: joi_1.default.string(),
    }),
});
exports.IOrganizationChirpstackSwagger = (0, joi_to_swagger_1.default)(exports.IOrganizationChirpstackValidation).swagger;
