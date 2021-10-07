"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IReporteTrackerSilobolsaSwagger = exports.IReporteTrackerSilobolsaValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IReporteTrackerSilobolsaValidation = joi_1.default.object({
    deveui: joi_1.default.string().required(),
    idSilobolsa: joi_1.default.string(),
    fecha: joi_1.default.date().required(),
    alarma: joi_1.default.boolean(),
});
exports.IReporteTrackerSilobolsaSwagger = (0, joi_to_swagger_1.default)(exports.IReporteTrackerSilobolsaValidation).swagger;
