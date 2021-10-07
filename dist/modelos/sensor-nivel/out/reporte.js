"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IReporteSensorNivelDTOSwagger = exports.IReporteSensorNivelDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IReporteSensorNivelDTOValidation = joi_1.default.object({
    _id: joi_1.default.string().required(),
    deveui: joi_1.default.string().required(),
    fecha: joi_1.default.date().required(),
    distancia: joi_1.default.number(),
});
exports.IReporteSensorNivelDTOSwagger = (0, joi_to_swagger_1.default)(exports.IReporteSensorNivelDTOValidation).swagger;
