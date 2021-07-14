"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAnimalSwagger = exports.IAnimalValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IAnimalValidation = joi_1.default.object({
    activo: joi_1.default.boolean(),
    caravana: joi_1.default.string().required(),
    deveui: joi_1.default.string(),
    dientes: joi_1.default.number(),
    fechaNacimiento: joi_1.default.date(),
    fechaAlta: joi_1.default.date(),
    foto: joi_1.default.string(),
    idBaja: joi_1.default.string(),
    idCategoria: joi_1.default.string(),
    idEspecie: joi_1.default.string().required(),
    idEstablecimiento: joi_1.default.string(),
    idGrupo: joi_1.default.string(),
    idLote: joi_1.default.string(),
    idMadre: joi_1.default.string(),
    idPadre: joi_1.default.string(),
    idRaza: joi_1.default.string(),
    idSubcategoria: joi_1.default.string(),
    sexo: joi_1.default.boolean(),
});
exports.IAnimalSwagger = joi_to_swagger_1.default(exports.IAnimalValidation).swagger;
