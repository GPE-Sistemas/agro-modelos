"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDispositivoSilobolsa = void 0;
const mongoose_1 = require("mongoose");
exports.SDispositivoSilobolsa = new mongoose_1.Schema({
    // Base
    adr: { type: Boolean },
    deveui: { type: String, required: true, unique: true, trim: true, minlength: 16, maxlength: 16 },
    deviceName: { type: String, unique: true, sparse: true },
    dr: { type: Number },
    fCnt: { type: String },
    fechaUltimoUplink: { type: Date },
    metadatos: { type: Array },
    red: { type: String, required: true },
    // Especificos Silobolsa
    alarmaActiva: { type: Boolean },
    fechaAsignacion: { type: Date },
    idUltimoReporte: { type: mongoose_1.Types.ObjectId },
    idSilobolsa: { type: String },
    posicion: { type: Number },
});
exports.SDispositivoSilobolsa.index({ idSilobolsa: 1 }, { sparse: true });
exports.SDispositivoSilobolsa.index({ deveui: 1 });
exports.SDispositivoSilobolsa.index({ idSilobolsa: 1, deveui: 1 }, { sparse: true });
exports.SDispositivoSilobolsa.virtual('ultimoReporte', {
    foreignField: '_id',
    justOne: true,
    localField: 'idUltimoReporte',
    ref: 'reportes',
});
