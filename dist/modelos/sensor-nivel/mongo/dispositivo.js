"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDispositivoSensorNivel = void 0;
const mongoose_1 = require("mongoose");
exports.SDispositivoSensorNivel = new mongoose_1.Schema({
    // Base
    adr: { type: Boolean },
    deveui: { type: String, required: true, unique: true, trim: true, minlength: 16, maxlength: 16 },
    deviceName: { type: String, unique: true, sparse: true },
    dr: { type: Number },
    fCnt: { type: String },
    fechaUltimoUplink: { type: Date },
    metadatos: { type: Array },
    red: { type: String, required: true },
    // Especificos SensorNivel
    idUltimoReporte: { type: mongoose_1.Types.ObjectId, ref: 'reportes' },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    firmware: { type: String },
    fechaAsignacion: { type: Date },
    idAsignado: { type: String },
});
exports.SDispositivoSensorNivel.index({ deveui: 1 });
exports.SDispositivoSensorNivel.virtual('ultimoReporte', {
    foreignField: '_id',
    justOne: true,
    localField: 'idUltimoReporte',
    ref: 'reportes',
});
