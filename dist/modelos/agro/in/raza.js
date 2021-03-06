"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRazaSchema = exports.IRazaValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IRazaValidation = joi_1.default.object({
    nombre: joi_1.default.string(),
    idEspecie: joi_1.default.string(),
});
exports.IRazaSchema = (0, joi_to_swagger_1.default)(exports.IRazaValidation).swagger;
