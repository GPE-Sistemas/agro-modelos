"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPuntoInteresSwagger = exports.IPuntoInteresValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
const icono_1 = require("./icono");
exports.IPuntoInteresValidation = joi_1.default.object({
    nombre: joi_1.default.string(),
    idEstablecimiento: joi_1.default.string(),
    coordenadas: shared_1.ICoordenadasValidation,
    icono: icono_1.IIconoValidation,
});
exports.IPuntoInteresSwagger = (0, joi_to_swagger_1.default)(exports.IPuntoInteresValidation).swagger;
