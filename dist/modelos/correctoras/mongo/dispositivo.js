"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDispositivoCorrectora = void 0;
const mongoose_1 = require("mongoose");
exports.SDispositivoCorrectora = new mongoose_1.Schema({
    // Base
    adr: { type: Boolean },
    deveui: { type: String, required: true, unique: true, trim: true, minlength: 16, maxlength: 16 },
    deviceName: { type: String, unique: true, sparse: true },
    dr: { type: Number },
    fCnt: { type: String },
    fechaUltimoUplink: { type: Date },
    metadatos: { type: Array },
    red: { type: String, required: true },
    // Especificos Correctora
    firmware: { type: String },
    fechaAsignacion: { type: Date },
    numeroSerieCorrectora: { type: String },
    idUltimoReporte: { type: mongoose_1.Types.ObjectId, ref: 'reportes' },
});
exports.SDispositivoCorrectora.index({ numeroSerieCorrectora: 1 }, { sparse: true });
exports.SDispositivoCorrectora.index({ deveui: 1 });
exports.SDispositivoCorrectora.virtual('ultimoReporte', {
    foreignField: '_id',
    justOne: true,
    localField: 'idUltimoReporte',
    ref: 'reportes',
});
