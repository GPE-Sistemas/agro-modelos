"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDispositivoTrackerSilobolsa = void 0;
const mongoose_1 = require("mongoose");
exports.SDispositivoTrackerSilobolsa = new mongoose_1.Schema({
    // Base
    adr: { type: Boolean },
    deveui: { type: String, required: true, unique: true, trim: true, minlength: 16, maxlength: 16 },
    deviceName: { type: String, unique: true, sparse: true },
    dr: { type: Number },
    fCnt: { type: String },
    fechaUltimoUplink: { type: Date },
    metadatos: { type: Array },
    red: { type: String, required: true },
    // Especificos
    fechaAsignacion: { type: Date },
    idUltimoReporte: { type: mongoose_1.Types.ObjectId },
    idSilobolsa: { type: String },
    posicion: { type: Number },
    firmware: { type: String },
    sensibilidad: { type: Number },
});
exports.SDispositivoTrackerSilobolsa.index({ idSilobolsa: 1 }, { sparse: true });
exports.SDispositivoTrackerSilobolsa.index({ deveui: 1 });
exports.SDispositivoTrackerSilobolsa.virtual('ultimoReporte', {
    foreignField: '_id',
    justOne: true,
    localField: 'idUltimoReporte',
    ref: 'reportes',
});
