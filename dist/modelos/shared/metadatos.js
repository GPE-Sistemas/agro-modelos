"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMetadatosSchema = exports.IMetadatosValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IMetadatosValidation = joi_1.default.object({
    gatewayID: joi_1.default.string().required(),
    timestamp: joi_1.default.date(),
    rssi: joi_1.default.number(),
    loRaSNR: joi_1.default.number(),
    location: joi_1.default.object({
        altitude: joi_1.default.number(),
        latitude: joi_1.default.number(),
        longitude: joi_1.default.number(),
    }),
});
exports.IMetadatosSchema = joi_to_swagger_1.default(exports.IMetadatosValidation).swagger;
