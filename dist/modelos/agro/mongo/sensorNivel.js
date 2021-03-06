"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSensorNivel = void 0;
const mongoose_1 = require("mongoose");
exports.SSensorNivel = new mongoose_1.Schema({
    activo: { type: Boolean, default: true },
    deveui: { type: String },
    fechaCreacion: { type: Date },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    idEstablecimiento: { type: mongoose_1.Types.ObjectId, ref: 'establecimientos' },
    idLote: { type: mongoose_1.Types.ObjectId, ref: 'lotes' },
    nombre: { type: String },
    offset: { type: Number },
    ultimoReporte: { type: Object },
});
exports.SSensorNivel.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
exports.SSensorNivel.virtual('lote', {
    foreignField: '_id',
    justOne: true,
    localField: 'idLote',
    ref: 'lotes',
});
exports.SSensorNivel.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
