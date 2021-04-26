"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SServicio = void 0;
const mongoose_1 = require("mongoose");
exports.SServicio = new mongoose_1.Schema({
    idAnimal: { type: mongoose_1.Types.ObjectId, required: true, ref: 'animales' },
    fecha: { type: Date, required: true },
    inicio: { type: Boolean },
    observaciones: { type: String },
});
exports.SServicio.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAniaml',
    ref: 'animales',
});
