"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPermisoSwagger = exports.IPermisoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IPermisoValidation = joi_1.default.object({
    ['idEstablecimiento']: joi_1.default.object({
        globales: joi_1.default.object({
            creacion: joi_1.default.boolean(),
            eliminacion: joi_1.default.boolean(),
            modificacion: joi_1.default.boolean(),
            lectura: joi_1.default.boolean(),
        }),
        ['entidad']: joi_1.default.object({
            creacion: joi_1.default.boolean(),
            eliminacion: joi_1.default.boolean(),
            modificacion: joi_1.default.boolean(),
            lectura: joi_1.default.boolean(),
        }),
    }),
});
exports.IPermisoSwagger = (0, joi_to_swagger_1.default)(exports.IPermisoValidation).swagger;
