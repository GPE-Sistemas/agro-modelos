"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLote = void 0;
const mongoose_1 = require("mongoose");
exports.SLote = new mongoose_1.Schema({
    color: { type: String },
    nombre: { type: String, required: true },
    coordenadas: [{ type: Object, required: true }],
    idEstablecimiento: { type: mongoose_1.Types.ObjectId, required: true, ref: 'establecimientos' },
});
exports.SLote.index({ nombre: 1, idEstablecimiento: 1 }, { unique: true });
exports.SLote.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
