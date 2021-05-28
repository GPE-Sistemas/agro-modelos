"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SReporteSilobolsa = void 0;
const mongoose_1 = require("mongoose");
exports.SReporteSilobolsa = new mongoose_1.Schema({
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    idSilobolsa: { type: String },
    fecha: { type: Date, required: true },
    co2: { type: Number },
    temperatura: { type: Number },
    humedad: { type: Number },
    bateria: { type: Number },
    // Calculados
    bateriaPorc: { type: Number },
    co2Porc: { type: Number },
    humedadPorc: { type: Number },
    temperaturaGrados: { type: Number },
    humedadEquilibrio: { type: Number },
});
exports.SReporteSilobolsa.index({ idSilobolsa: 1 }, { sparse: true });
exports.SReporteSilobolsa.index({ fecha: 1 });
exports.SReporteSilobolsa.index({ deveui: 1 });
exports.SReporteSilobolsa.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
