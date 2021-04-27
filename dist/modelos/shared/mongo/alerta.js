"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAlerta = void 0;
const mongoose_1 = require("mongoose");
exports.SAlerta = new mongoose_1.Schema({
    aplicacion: { type: String },
    nivel: { type: Number },
    mensaje: { type: String },
    mensajeCorto: { type: String },
    valor: { type: String },
    deveui: { type: String },
    deviceName: { type: String },
    idAsignado: { type: String },
    nombreAsignado: { type: String },
    archivada: { type: Boolean },
    comentarios: [{
            fecha: { type: Date },
            usuario: { type: String },
            comentario: { type: String },
        }],
    fecha: { type: Date },
    estadoActual: { type: String },
    estados: {
        fecha: { type: Date },
        usuario: { type: String },
        estado: { type: String },
    }
});
