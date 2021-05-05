"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAplicacion = void 0;
const mongoose_1 = require("mongoose");
exports.SAplicacion = new mongoose_1.Schema({
    nombre: { type: String, required: true, unique: true },
    urlApiAplicacion: { type: String },
    urlApiEntrada: { type: String },
});
