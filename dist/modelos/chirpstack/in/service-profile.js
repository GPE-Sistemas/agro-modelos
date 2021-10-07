"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IServiceProfileChirpstackSwagger = exports.IServiceProfileChirpstackValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IServiceProfileChirpstackValidation = joi_1.default.object({
    serviceProfile: joi_1.default.object({
        addGWMetaData: joi_1.default.boolean(),
        channelMask: joi_1.default.string(),
        devStatusReqFreq: joi_1.default.number(),
        dlBucketSize: joi_1.default.number(),
        dlRate: joi_1.default.number(),
        dlRatePolicy: joi_1.default.string().valid('DROP', 'MARK'),
        drMax: joi_1.default.number(),
        drMin: joi_1.default.number(),
        hrAllowed: joi_1.default.boolean(),
        id: joi_1.default.string(),
        minGWDiversity: joi_1.default.number(),
        name: joi_1.default.string(),
        networkServerID: joi_1.default.string(),
        nwkGeoLoc: joi_1.default.boolean(),
        organizationID: joi_1.default.string(),
        prAllowed: joi_1.default.boolean(),
        raAllowed: joi_1.default.boolean(),
        reportDevStatusBattery: joi_1.default.boolean(),
        reportDevStatusMargin: joi_1.default.boolean(),
        targetPER: joi_1.default.number(),
        ulBucketSize: joi_1.default.number(),
        ulRate: joi_1.default.number(),
        ulRatePolicy: joi_1.default.string().valid('DROP', 'MARK'),
    }),
});
exports.IServiceProfileChirpstackSwagger = (0, joi_to_swagger_1.default)(exports.IServiceProfileChirpstackValidation).swagger;
