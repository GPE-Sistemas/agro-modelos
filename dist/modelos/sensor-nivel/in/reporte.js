"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IReporteSensorNivelSwagger = exports.IReporteSensorNivelValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IReporteSensorNivelValidation = joi_1.default.object({
    deveui: joi_1.default.string(),
    fecha: joi_1.default.date(),
    distancia: joi_1.default.number(),
});
exports.IReporteSensorNivelSwagger = joi_to_swagger_1.default(exports.IReporteSensorNivelValidation).swagger;
