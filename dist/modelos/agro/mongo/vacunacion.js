"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVacunacion = void 0;
const mongoose_1 = require("mongoose");
exports.SVacunacion = new mongoose_1.Schema({
    idAnimal: { type: mongoose_1.Types.ObjectId, required: true, ref: 'animales' },
    idTipoVacuna: { type: mongoose_1.Types.ObjectId, required: true, ref: 'tiposVacunas' },
    idEstablecimiento: { type: mongoose_1.Types.ObjectId, ref: 'establecimientos' },
    fecha: { type: Date, required: true },
    dosis: { type: String },
    producto: { type: String },
    observaciones: { type: String },
});
exports.SVacunacion.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAnimal',
    ref: 'animales',
});
exports.SVacunacion.virtual('tipoVacuna', {
    foreignField: '_id',
    justOne: true,
    localField: 'idTipoVacuna',
    ref: 'tiposVacunas',
});
exports.SVacunacion.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
