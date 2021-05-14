"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDispositivo = void 0;
const mongoose_1 = require("mongoose");
exports.SDispositivo = new mongoose_1.Schema({
    adr: { type: Boolean },
    deveui: { type: String, required: true, unique: true, trim: true, minlength: 16, maxlength: 16 },
    deviceName: { type: String, unique: true, sparse: true },
    dr: { type: Number },
    fCnt: { type: Number },
    fechaUltimoUplink: { type: Date },
    metadatos: { type: Array },
    red: { type: String, required: true },
    //
    tipo: { type: String },
});
