"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SReporteCorrectora = void 0;
const mongoose_1 = require("mongoose");
exports.SReporteCorrectora = new mongoose_1.Schema({
    fecha: { type: Date, required: true },
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    numeroSerie: { type: String },
    corrected: { type: Number },
    uncorrected: { type: Number },
    presion: { type: Number },
    temperatura: { type: Number },
});
exports.SReporteCorrectora.index({ deveui: 1, fecha: 1 });
exports.SReporteCorrectora.index({ numeroSerie: 1, fecha: 1 }, { sparse: true, unique: true });
exports.SReporteCorrectora.index({ numeroSerie: 1, deveui: 1, fecha: 1 }, { sparse: true });
exports.SReporteCorrectora.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
exports.SReporteCorrectora.virtual('correctora', {
    foreignField: 'numeroSerie',
    justOne: true,
    localField: 'numeroSerie',
    ref: 'correctoras',
});
