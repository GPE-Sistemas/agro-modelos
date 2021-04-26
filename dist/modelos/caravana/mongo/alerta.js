"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAlertaCaravana = void 0;
const mongoose_1 = require("mongoose");
exports.SAlertaCaravana = new mongoose_1.Schema({
    codigo: { type: Number, required: true },
    deveui: { type: String, required: true },
    fecha: { type: Date, required: true },
    idAsignado: { type: String },
});
exports.SAlertaCaravana.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
