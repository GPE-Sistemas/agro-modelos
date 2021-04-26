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
    timestamp: { type: String },
    usuario: { type: Object },
});
