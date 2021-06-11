"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SReporteTrackerSilobolsa = void 0;
const mongoose_1 = require("mongoose");
exports.SReporteTrackerSilobolsa = new mongoose_1.Schema({
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    idSilobolsa: { type: String },
    fecha: { type: Date, required: true },
    alarma: { type: Boolean },
});
exports.SReporteTrackerSilobolsa.index({ deveui: 1, fecha: 1 });
exports.SReporteTrackerSilobolsa.index({ idSilobolsa: 1, fecha: 1 }, { sparse: true });
exports.SReporteTrackerSilobolsa.index({ idSilobolsa: 1, deveui: 1, fecha: 1 }, { sparse: true });
exports.SReporteTrackerSilobolsa.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
