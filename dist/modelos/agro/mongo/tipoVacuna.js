"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STipoVacuna = void 0;
const mongoose_1 = require("mongoose");
exports.STipoVacuna = new mongoose_1.Schema({
    nombre: { type: String, required: true, unique: true },
});
