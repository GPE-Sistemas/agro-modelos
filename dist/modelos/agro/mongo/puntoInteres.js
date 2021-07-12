"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPuntoInteres = void 0;
const mongoose_1 = require("mongoose");
const icono_1 = require("./icono");
exports.SPuntoInteres = new mongoose_1.Schema({
    nombre: { type: String, required: true, unique: true },
    coordenadas: { type: Object },
    icono: icono_1.SIcono,
});
exports.SPuntoInteres.index({ nombre: 1 });
