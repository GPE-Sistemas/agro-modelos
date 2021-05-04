"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDeviceDetailChirpstackDTOSwagger = exports.IDeviceDetailChirpstackDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const gateway_1 = require("./gateway");
exports.IDeviceDetailChirpstackDTOValidation = joi_1.default.object({
    device: joi_1.default.object({
        applicationID: joi_1.default.string(),
        description: joi_1.default.string(),
        devEUI: joi_1.default.string(),
        deviceProfileID: joi_1.default.string(),
        isDisabled: joi_1.default.boolean(),
        name: joi_1.default.string(),
        referenceAltitude: joi_1.default.number(),
        skipFCntCheck: joi_1.default.boolean(),
        tags: joi_1.default.object(),
        variables: joi_1.default.object(),
    }),
    deviceStatusBattery: joi_1.default.number(),
    deviceStatusMargin: joi_1.default.number(),
    lastSeenAt: joi_1.default.string(),
    location: gateway_1.ICommonLocationValidation
});
exports.IDeviceDetailChirpstackDTOSwagger = joi_to_swagger_1.default(exports.IDeviceDetailChirpstackDTOValidation).swagger;
