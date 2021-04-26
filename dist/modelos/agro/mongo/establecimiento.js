"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEstablecimiento = void 0;
const mongoose_1 = require("mongoose");
exports.SEstablecimiento = new mongoose_1.Schema({
    nombre: { type: String, required: true, unique: true },
    coordenadas: [{ type: Object }],
});
