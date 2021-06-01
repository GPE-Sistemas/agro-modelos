"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SReporteCaravana = void 0;
const mongoose_1 = require("mongoose");
exports.SReporteCaravana = new mongoose_1.Schema({
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    fecha: { type: Date, required: true },
    idAnimal: { type: String },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    dentroCorral: { type: Boolean },
    dentroEstablecimiento: { type: Boolean },
});
exports.SReporteCaravana.index({ deveui: 1, fecha: 1 });
exports.SReporteCaravana.index({ idAnimal: 1, fecha: 1 }, { sparse: true });
exports.SReporteCaravana.index({ idAnimal: 1, deveui: 1, fecha: 1 }, { sparse: true });
exports.SReporteCaravana.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
