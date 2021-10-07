"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITratamientoDTOSwagger = exports.ITratamientoDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const diagnostico_1 = require("./diagnostico");
const tipoTratamiento_1 = require("./tipoTratamiento");
const animal_1 = require("./animal");
const establecimiento_1 = require("./establecimiento");
exports.ITratamientoDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    idAnimal: joi_1.default.string(),
    idDiagnostico: joi_1.default.string(),
    idTipoTratamiento: joi_1.default.string(),
    idEstablecimiento: joi_1.default.string(),
    fecha: joi_1.default.date(),
    producto: joi_1.default.string(),
    observaciones: joi_1.default.string(),
    //
    animal: animal_1.IAnimalDTOValidation,
    diagnostico: diagnostico_1.IDiagnosticoDTOValidation,
    tipoTratamiento: tipoTratamiento_1.ITipoTratamientoDTOValidation,
    establecimiento: establecimiento_1.IEstablecimientoDTOValidation,
});
exports.ITratamientoDTOSwagger = (0, joi_to_swagger_1.default)(exports.ITratamientoDTOValidation).swagger;
