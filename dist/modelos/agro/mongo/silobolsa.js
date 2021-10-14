"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSilobolsa = void 0;
const mongoose_1 = require("mongoose");
exports.SSilobolsa = new mongoose_1.Schema({
    idEstablecimiento: { type: mongoose_1.Types.ObjectId, ref: 'establecimientos', required: true },
    idLote: { type: mongoose_1.Types.ObjectId, ref: 'lotes' },
    deveuiLanzas: [{ type: String, ref: 'dispositivos' }],
    deveuiTrackers: [{ type: String, ref: 'dispositivos' }],
    numero: { type: String, required: true },
    metros: { type: Number },
    especie: { type: String, required: true },
    cosecha: { type: String, required: true },
    producto: { type: String, required: true },
    fechaConfeccion: { type: Date, required: true },
    humedadConfeccion: { type: Number },
    activa: { type: Boolean },
    fechaDesmantelacion: { type: Date },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
});
exports.SSilobolsa.index({ activa: 1, numero: 1 });
exports.SSilobolsa.index({ activa: 1, fechaConfeccion: -1 });
exports.SSilobolsa.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
exports.SSilobolsa.virtual('lote', {
    foreignField: '_id',
    justOne: true,
    localField: 'idLote',
    ref: 'lotes',
});
