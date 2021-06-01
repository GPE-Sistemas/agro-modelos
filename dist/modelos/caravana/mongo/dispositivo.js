"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDispositivoCaravana = void 0;
const mongoose_1 = require("mongoose");
exports.SDispositivoCaravana = new mongoose_1.Schema({
    // Base
    adr: { type: Boolean },
    deveui: { type: String, required: true, unique: true, trim: true, minlength: 16, maxlength: 16 },
    deviceName: { type: String, unique: true, sparse: true },
    dr: { type: Number },
    fCnt: { type: String },
    fechaUltimoUplink: { type: Date },
    metadatos: { type: Array },
    red: { type: String, required: true },
    // Especificos Caravana
    acelerometro: { type: Object },
    fechaAsignacion: { type: Date },
    frecuenciaReporte: { type: String },
    idAnimal: { type: String },
    idUltimoReporte: { type: mongoose_1.Types.ObjectId, ref: 'reportes' },
});
exports.SDispositivoCaravana.index({ idAnimal: 1 }, { sparse: true });
exports.SDispositivoCaravana.index({ deveui: 1 });
exports.SDispositivoCaravana.virtual('ultimoReporte', {
    foreignField: '_id',
    justOne: true,
    localField: 'idUltimoReporte',
    ref: 'reportes',
});
