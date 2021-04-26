"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCorral = void 0;
const mongoose_1 = require("mongoose");
exports.SCorral = new mongoose_1.Schema({
    color: { type: String },
    nombre: { type: String, required: true, unique: true },
    coordenadas: [{ type: Object, required: true }],
    idEstablecimiento: { type: mongoose_1.Types.ObjectId, required: true, ref: 'establecimientos' },
});
exports.SCorral.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
