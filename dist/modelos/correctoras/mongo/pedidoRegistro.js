"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPedidoReporte = void 0;
const mongoose_1 = require("mongoose");
exports.SPedidoReporte = new mongoose_1.Schema({
    timestamp: { type: Date, required: true, },
    fechaCreacion: { type: Date, required: true, },
    numeroSerie: { type: String, required: true, ref: 'correctoras' },
    aplicado: { type: Boolean },
});
exports.SPedidoReporte.index({ 'timestamp': 1, 'numeroSerie': 1 }, { unique: true });
exports.SPedidoReporte.virtual('correctora', {
    foreignField: 'numeroSerie',
    justOne: true,
    localField: 'numeroSerie',
    ref: 'correctoras',
});
