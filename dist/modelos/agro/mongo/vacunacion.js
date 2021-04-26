"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVacunacion = void 0;
const mongoose_1 = require("mongoose");
exports.SVacunacion = new mongoose_1.Schema({
    idAnimal: { type: mongoose_1.Types.ObjectId, required: true, ref: 'animales' },
    idTipoVacuna: { type: mongoose_1.Types.ObjectId, required: true, ref: 'tiposVacunas' },
    fecha: { type: Date, required: true },
    dosis: { type: String },
    producto: { type: String },
    observaciones: { type: String },
});
exports.SVacunacion.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAniaml',
    ref: 'animales',
});
exports.SVacunacion.virtual('tipoVacuna', {
    foreignField: '_id',
    justOne: true,
    localField: 'idTipoVacuna',
    ref: 'tiposVacunas',
});
