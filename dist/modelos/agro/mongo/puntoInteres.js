"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPuntoInteres = void 0;
const mongoose_1 = require("mongoose");
const icono_1 = require("./icono");
exports.SPuntoInteres = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    idEstablecimiento: { type: mongoose_1.Types.ObjectId },
    coordenadas: { type: Object },
    icono: icono_1.SIcono,
});
exports.SPuntoInteres.index({ nombre: 1, idEstablecimiento: 1 }, { unique: true });
exports.SPuntoInteres.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
