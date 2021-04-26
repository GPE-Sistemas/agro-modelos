"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SReporteCaravana = void 0;
const mongoose_1 = require("mongoose");
exports.SReporteCaravana = new mongoose_1.Schema({
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    fecha: { type: Date, required: true },
    idAsignado: { type: String },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
});
exports.SReporteCaravana.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
