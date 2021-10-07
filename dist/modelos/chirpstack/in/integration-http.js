"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IIntegrationHTTPChirpstackSwagger = exports.IIntegrationHTTPChirpstackValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IIntegrationHTTPChirpstackValidation = joi_1.default.object({
    integration: joi_1.default.object({
        ackNotificationURL: joi_1.default.string(),
        applicationID: joi_1.default.string(),
        errorNotificationURL: joi_1.default.string(),
        eventEndpointURL: joi_1.default.string(),
        headers: joi_1.default.array().items(joi_1.default.object({
            key: joi_1.default.string(),
            value: joi_1.default.string(),
        })),
        integrationNotificationURL: joi_1.default.string(),
        joinNotificationURL: joi_1.default.string(),
        locationNotificationURL: joi_1.default.string(),
        marshaler: joi_1.default.string().valid('JSON', 'PROTOBUF', 'JSON_V3'),
        statusNotificationURL: joi_1.default.string(),
        txAckNotificationURL: joi_1.default.string(),
        uplinkDataURL: joi_1.default.string(),
    }),
});
exports.IIntegrationHTTPChirpstackSwagger = (0, joi_to_swagger_1.default)(exports.IIntegrationHTTPChirpstackValidation).swagger;
