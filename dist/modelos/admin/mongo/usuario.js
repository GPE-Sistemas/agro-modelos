"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUsuario = void 0;
const mongoose_1 = require("mongoose");
exports.SUsuario = new mongoose_1.Schema({
    usuario: { type: String, required: true, unique: true },
    clave: { type: String, required: true },
    idCliente: { type: mongoose_1.Types.ObjectId, required: true, ref: 'clientes' },
    nombre: { type: String },
    apellido: { type: String },
    notificacionesActivas: { type: Boolean },
    notificaciones: {
        telegram: { type: String },
        whatsapp: { type: Boolean },
        email: { type: Boolean },
    },
    email: { type: String },
    telefono: { type: String },
});
exports.SUsuario.virtual('cliente', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCliente',
    ref: 'clientes',
});
