"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEspecie = void 0;
const mongoose_1 = require("mongoose");
const icono_1 = require("./icono");
exports.SEspecie = new mongoose_1.Schema({
    nombre: { type: String, required: true, unique: true },
    icono: icono_1.SIcono,
    iconoFueraCorral: icono_1.SIcono,
    iconoFueraEstablecimiento: icono_1.SIcono,
});
