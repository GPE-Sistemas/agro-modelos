"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPesaje = void 0;
const mongoose_1 = require("mongoose");
exports.SPesaje = new mongoose_1.Schema({
    idAnimal: { type: mongoose_1.Types.ObjectId, required: true, ref: 'animales' },
    idEstablecimiento: { type: mongoose_1.Types.ObjectId, ref: 'establecimientos' },
    fecha: { type: Date, required: true },
    peso: { type: Number, min: 0 },
    observaciones: { type: String },
});
exports.SPesaje.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAnimal',
    ref: 'animales',
});
exports.SPesaje.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
