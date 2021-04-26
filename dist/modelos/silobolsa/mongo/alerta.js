"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAlertaSilobolsa = void 0;
const mongoose_1 = require("mongoose");
exports.SAlertaSilobolsa = new mongoose_1.Schema({
    codigo: { type: Number, required: true },
    nivel: { type: Number },
    valor: { type: Number },
    fecha: { type: Date, required: true },
    deveui: { type: String, required: true },
    idSilobolsa: { type: mongoose_1.Types.ObjectId },
    archivada: { type: Boolean, required: true, default: false },
});
exports.SAlertaSilobolsa.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
