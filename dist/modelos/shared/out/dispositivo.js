"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDispositivoDTOSwagger = exports.IDispositivoDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const metadatos_1 = require("../metadatos");
exports.IDispositivoDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    adr: joi_1.default.boolean(),
    deveui: joi_1.default.string(),
    deviceName: joi_1.default.string(),
    dr: joi_1.default.number(),
    fCnt: joi_1.default.number(),
    fechaUltimoUplink: joi_1.default.date(),
    metadatos: joi_1.default.array().items(metadatos_1.IMetadatosValidation),
    red: joi_1.default.string(),
});
exports.IDispositivoDTOSwagger = joi_to_swagger_1.default(exports.IDispositivoDTOValidation).swagger;
