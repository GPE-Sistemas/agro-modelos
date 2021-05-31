"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCorrectora = void 0;
const mongoose_1 = require("mongoose");
exports.SCorrectora = new mongoose_1.Schema({
    firmware: { type: String },
    numeroSerie: { type: String, required: true, unique: true },
    deveui: { type: String },
    modelo: { type: String },
    idUltimoReporte: { type: mongoose_1.Types.ObjectId },
    fechaAsignacion: { type: Date },
    bateria: { type: Number },
});
exports.SCorrectora.index({ numeroSerie: 1 });
exports.SCorrectora.index({ deveui: 1 });
exports.SCorrectora.index({ fechaAsignacion: -1 });
