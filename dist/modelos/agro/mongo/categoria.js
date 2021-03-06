"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCategoria = void 0;
const mongoose_1 = require("mongoose");
const icono_1 = require("./icono");
exports.SCategoria = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    idEspecie: { type: mongoose_1.Types.ObjectId, required: true, ref: 'especies' },
    sexo: { type: Boolean },
    icono: icono_1.SIcono,
    iconoFueraCorral: icono_1.SIcono,
    iconoFueraEstablecimiento: icono_1.SIcono,
});
exports.SCategoria.index({ nombre: 1, idEspecie: 1 }, { unique: true });
exports.SCategoria.virtual('especie', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEspecie',
    ref: 'especies',
});
