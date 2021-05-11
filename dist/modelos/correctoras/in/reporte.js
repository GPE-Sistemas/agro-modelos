"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IReporteCorrectoraSwagger = exports.IReporteCorrectoraValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IReporteCorrectoraValidation = joi_1.default.object({
    deveui: joi_1.default.string().required(),
    numeroSerieCorrectora: joi_1.default.string(),
    fecha: joi_1.default.date().required(),
    corrected: joi_1.default.number(),
    uncorrected: joi_1.default.number(),
    presion: joi_1.default.number(),
    temperatura: joi_1.default.number(),
});
exports.IReporteCorrectoraSwagger = joi_to_swagger_1.default(exports.IReporteCorrectoraValidation).swagger;
