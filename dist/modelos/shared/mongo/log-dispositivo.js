"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLog = void 0;
const mongoose_1 = require("mongoose");
exports.SLog = new mongoose_1.Schema({
    fecha: { type: Date },
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    puerto: { type: Number },
    payload: { type: String },
    evento: { type: String },
    contenido: { type: String },
    fCnt: { type: String },
    deviceName: { type: String },
    aplicacion: { type: String },
});
exports.SLog.index({ fecha: -1 });
exports.SLog.index({ deveui: 1, fecha: -1 });
