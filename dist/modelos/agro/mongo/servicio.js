"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SServicio = void 0;
const mongoose_1 = require("mongoose");
exports.SServicio = new mongoose_1.Schema({
    idAnimal: { type: mongoose_1.Types.ObjectId, required: true, ref: 'animales' },
    idEstablecimiento: { type: mongoose_1.Types.ObjectId, ref: 'establecimientos' },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true },
    observaciones: { type: String },
});
exports.SServicio.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAnimal',
    ref: 'animales',
});
exports.SServicio.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
