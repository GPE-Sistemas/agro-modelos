"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLoteAnimal = void 0;
const mongoose_1 = require("mongoose");
exports.SLoteAnimal = new mongoose_1.Schema({
    nombre: { type: String, required: true, trim: true },
    idEstablecimiento: { type: mongoose_1.Types.ObjectId, required: true, ref: 'establecimientos' },
});
exports.SLoteAnimal.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
