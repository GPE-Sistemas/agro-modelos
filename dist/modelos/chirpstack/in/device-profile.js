"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDeviceProfileChirpstackSwagger = exports.IDeviceProfileChirpstackValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IDeviceProfileChirpstackValidation = joi_1.default.object({
    deviceProfile: joi_1.default.object({
        classBTimeout: joi_1.default.number(),
        classCTimeout: joi_1.default.number(),
        factoryPresetFreqs: joi_1.default.array().items(joi_1.default.number()),
        geolocBufferTTL: joi_1.default.number(),
        geolocMinBufferSize: joi_1.default.number(),
        id: joi_1.default.string(),
        macVersion: joi_1.default.string(),
        maxDutyCycle: joi_1.default.number(),
        maxEIRP: joi_1.default.number(),
        name: joi_1.default.string(),
        networkServerID: joi_1.default.string(),
        organizationID: joi_1.default.string(),
        payloadCodec: joi_1.default.string(),
        payloadDecoderScript: joi_1.default.string(),
        payloadEncoderScript: joi_1.default.string(),
        pingSlotDR: joi_1.default.number(),
        pingSlotFreq: joi_1.default.number(),
        pingSlotPeriod: joi_1.default.number(),
        regParamsRevision: joi_1.default.string(),
        rfRegion: joi_1.default.string(),
        rxDROffset1: joi_1.default.number(),
        rxDataRate2: joi_1.default.number(),
        rxDelay1: joi_1.default.number(),
        rxFreq2: joi_1.default.number(),
        supports32BitFCnt: joi_1.default.boolean(),
        supportsClassB: joi_1.default.boolean(),
        supportsClassC: joi_1.default.boolean(),
        supportsJoin: joi_1.default.boolean(),
        tags: joi_1.default.object(),
        uplinkInterval: joi_1.default.string(),
    }),
});
exports.IDeviceProfileChirpstackSwagger = joi_to_swagger_1.default(exports.IDeviceProfileChirpstackValidation).swagger;
