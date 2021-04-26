"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCategoria = void 0;
const mongoose_1 = require("mongoose");
exports.SCategoria = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    idEspecie: { type: mongoose_1.Types.ObjectId, required: true, ref: 'especies' },
    sexo: { type: Boolean },
    edadMinMeses: { type: Number },
    edadMaxMeses: { type: Number },
});
exports.SCategoria.virtual('especie', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEspecie',
    ref: 'especies',
});
