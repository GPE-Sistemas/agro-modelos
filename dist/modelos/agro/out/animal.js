"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAnimalDTOSwagger = exports.IAnimalDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const dispositivo_1 = require("../../caravana/out/dispositivo");
const baja_1 = require("./baja");
const categoria_1 = require("./categoria");
const corral_1 = require("./corral");
const especie_1 = require("./especie");
const establecimiento_1 = require("./establecimiento");
const grupo_1 = require("./grupo");
const lote_animal_1 = require("./lote-animal");
const raza_1 = require("./raza");
const subcategoria_1 = require("./subcategoria");
exports.IAnimalDTOValidation = joi_1.default.object({
    _id: joi_1.default.string().required(),
    activo: joi_1.default.boolean(),
    caravana: joi_1.default.string().required(),
    deveui: joi_1.default.string(),
    dientes: joi_1.default.number(),
    fechaNacimiento: joi_1.default.date(),
    fechaAlta: joi_1.default.date(),
    foto: joi_1.default.string(),
    idBaja: joi_1.default.string(),
    idCategoria: joi_1.default.string(),
    idCorral: joi_1.default.string(),
    idEspecie: joi_1.default.string(),
    idEstablecimiento: joi_1.default.string(),
    idGrupos: joi_1.default.array().items(joi_1.default.string()),
    idLote: joi_1.default.string(),
    idMadre: joi_1.default.string(),
    idPadre: joi_1.default.string(),
    idRaza: joi_1.default.string(),
    idSubcategoria: joi_1.default.string(),
    sexo: joi_1.default.boolean(),
    // Populate
    baja: baja_1.IBajaDTOValidation,
    categoria: categoria_1.ICategoriaDTOValidation,
    corral: corral_1.ICorralDTOValidation,
    dispositivo: dispositivo_1.IDispositivoCaravanaDTOValidation,
    especie: especie_1.IEspecieDTOValidation,
    establecimiento: establecimiento_1.IEstablecimientoDTOValidation,
    grupos: joi_1.default.array().items(grupo_1.IGrupoDTOValidation),
    lote: lote_animal_1.ILoteAnimalDTOValidation,
    // madre: IAnimalDTOValidation,
    // padre: IAnimalDTOValidation,
    raza: raza_1.IRazaDTOValidation,
    subcategoria: subcategoria_1.ISubcategoriaDTOValidation,
});
exports.IAnimalDTOSwagger = joi_to_swagger_1.default(exports.IAnimalDTOValidation).swagger;
