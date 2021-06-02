"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SComando = void 0;
const mongoose_1 = require("mongoose");
exports.SComando = new mongoose_1.Schema({
    deveui: { type: String, required: true, ref: 'dispositivos' },
    ejecutado: { type: Boolean },
    error: { type: Boolean },
    fCnt: { type: String },
    payload: { type: String },
    puerto: { type: Number },
    fecha: { type: Date },
    usuario: { type: Object },
    descripcion: { type: String },
    aplicacion: { type: String },
});
exports.SComando.index({ fecha: -1 });
exports.SComando.index({ deveui: 1, fecha: -1 });
