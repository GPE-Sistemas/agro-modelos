"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SApplicationServer = void 0;
const mongoose_1 = require("mongoose");
exports.SApplicationServer = new mongoose_1.Schema({
    nombre: { type: String, required: true, unique: true },
    url: { type: String, required: true },
    tipo: { type: String, required: true },
    config: { type: Object },
});
