"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDeviceKeysChirpstackSwagger = exports.IDeviceKeysChirpstackValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IDeviceKeysChirpstackValidation = joi_1.default.object({
    deviceKeys: joi_1.default.object({
        appKey: joi_1.default.string(),
        devEUI: joi_1.default.string(),
        genAppKey: joi_1.default.string(),
        nwkKey: joi_1.default.string(),
    }),
});
exports.IDeviceKeysChirpstackSwagger = (0, joi_to_swagger_1.default)(exports.IDeviceKeysChirpstackValidation).swagger;
