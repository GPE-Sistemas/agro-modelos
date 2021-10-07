"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IReporteCorrectoraDTOSwagger = exports.IReporteCorrectoraDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IReporteCorrectoraDTOValidation = joi_1.default.object({
    _id: joi_1.default.string().required(),
    deveui: joi_1.default.string().required(),
    numeroSerie: joi_1.default.string(),
    fecha: joi_1.default.date().required(),
    corrected: joi_1.default.number(),
    uncorrected: joi_1.default.number(),
    presion: joi_1.default.number(),
    temperatura: joi_1.default.number(),
});
exports.IReporteCorrectoraDTOSwagger = (0, joi_to_swagger_1.default)(exports.IReporteCorrectoraDTOValidation).swagger;
