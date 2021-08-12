"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEventoEspecifico = void 0;
const mongoose_1 = require("mongoose");
exports.SEventoEspecifico = new mongoose_1.Schema({
    idAnimal: { type: mongoose_1.Types.ObjectId, required: true, ref: 'animales' },
    idEstablecimiento: { type: mongoose_1.Types.ObjectId, ref: 'establecimientos' },
    fecha: { type: Date, required: true },
    titulo: { type: String },
    observaciones: { type: String },
});
exports.SEventoEspecifico.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAnimal',
    ref: 'animales',
});
exports.SEventoEspecifico.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
