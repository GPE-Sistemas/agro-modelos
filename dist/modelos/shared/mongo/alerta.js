"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAlerta = void 0;
const mongoose_1 = require("mongoose");
exports.SAlerta = new mongoose_1.Schema({
    idEstablecimiento: { type: mongoose_1.Types.ObjectId, ref: 'establecimientos' },
    aplicacion: { type: String },
    nivel: { type: Number },
    idAsignado: { type: String },
    nombreAsignado: { type: String },
    tipo: { type: String },
    fecha: { type: Date },
    estadoActual: { type: String },
    archivada: { type: Boolean },
    comentarios: [{
            fecha: { type: String },
            usuario: { type: String },
            comentario: { type: String },
        }],
    estados: [{
            fecha: { type: String },
            usuario: { type: String },
            estado: { type: String },
        }],
    reportes: [{
            deveui: { type: String },
            deviceName: { type: String },
            fecha: { type: String },
            medicion: { type: String },
            valor: { type: Number },
        }],
});
exports.SAlerta.index({ archivada: 1, fecha: -1 });
exports.SAlerta.index({ archivada: 1, estadoActual: 1, fecha: -1 });
exports.SAlerta.index({ archivada: 1, aplicacion: 1, fecha: -1 });
exports.SAlerta.index({ archivada: 1, idAsignado: 1, tipo: 1 });
exports.SAlerta.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
