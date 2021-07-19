"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SReporteSensorNivel = void 0;
const mongoose_1 = require("mongoose");
exports.SReporteSensorNivel = new mongoose_1.Schema({
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    fecha: { type: Date, required: true },
    distancia: { type: Number },
});
exports.SReporteSensorNivel.index({ deveui: 1, fecha: 1 });
exports.SReporteSensorNivel.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
