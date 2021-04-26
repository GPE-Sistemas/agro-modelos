"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLoteDispositivo = void 0;
const mongoose_1 = require("mongoose");
exports.SLoteDispositivo = new mongoose_1.Schema({
    nombre: { type: String, required: true, unique: true },
});
