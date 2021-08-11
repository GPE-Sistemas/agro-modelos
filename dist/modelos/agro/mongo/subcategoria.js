"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSubcategoria = void 0;
const mongoose_1 = require("mongoose");
exports.SSubcategoria = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    pesoMin: { type: Number },
    pesoMax: { type: Number },
    idCategoria: { type: mongoose_1.Types.ObjectId, required: true, ref: 'categorias' },
});
exports.SSubcategoria.index({ nombre: 1, idCategoria: 1 }, { unique: true });
exports.SSubcategoria.virtual('categoria', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCategoria',
    ref: 'categorias',
});
