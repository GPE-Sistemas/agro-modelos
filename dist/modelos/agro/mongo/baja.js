"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SBaja = void 0;
const mongoose_1 = require("mongoose");
exports.SBaja = new mongoose_1.Schema({
    fecha: { type: Date, required: true },
    idTipoBaja: { type: mongoose_1.Types.ObjectId, required: true, ref: 'tiposBajas' },
    idAnimal: { type: mongoose_1.Types.ObjectId, required: true, ref: 'animales' },
    observaciones: { type: String },
});
exports.SBaja.virtual('tipoBaja', {
    foreignField: '_id',
    justOne: true,
    localField: 'idTipoBaja',
    ref: 'tiposBajas',
});
exports.SBaja.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAnimal',
    ref: 'animales',
});
