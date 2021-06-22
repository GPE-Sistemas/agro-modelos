"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCorrectora = void 0;
const mongoose_1 = require("mongoose");
exports.SCorrectora = new mongoose_1.Schema({
    firmware: { type: String },
    numeroSerie: { type: String, required: true, unique: true },
    deveui: { type: String },
    modelo: { type: String },
    fechaAsignacion: { type: Date },
    bateria: { type: Number },
    activa: { type: Boolean, required: true },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    idEstablecimiento: { type: mongoose_1.Types.ObjectId, ref: 'establecimientos' },
    idLote: { type: mongoose_1.Types.ObjectId, ref: 'lotes' },
});
exports.SCorrectora.index({ numeroSerie: 1 });
exports.SCorrectora.index({ deveui: 1 });
exports.SCorrectora.index({ fechaAsignacion: -1 });
exports.SCorrectora.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
exports.SCorrectora.virtual('lote', {
    foreignField: '_id',
    justOne: true,
    localField: 'idLote',
    ref: 'lotes',
});
