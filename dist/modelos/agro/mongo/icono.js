"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIcono = void 0;
const mongoose_1 = require("mongoose");
exports.SIcono = new mongoose_1.Schema({
    nombre: { type: String },
    strokeColor: { type: String },
    fillColor: { type: String },
});
