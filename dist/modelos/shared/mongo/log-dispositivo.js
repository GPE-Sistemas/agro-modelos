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
});
