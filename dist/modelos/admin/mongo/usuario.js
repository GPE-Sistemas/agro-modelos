"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUsuario = void 0;
const mongoose_1 = require("mongoose");
exports.SUsuario = new mongoose_1.Schema({
    activo: { type: Boolean },
    usuario: { type: String, required: true, unique: true },
    clave: { type: String, required: true },
    rol: { type: String },
    idCliente: { type: mongoose_1.Types.ObjectId, required: true, ref: 'clientes' },
    idAplicaciones: [{ type: mongoose_1.Types.ObjectId, ref: 'aplicaciones' }],
    nombre: { type: String },
    apellido: { type: String },
    notificacionesActivas: { type: Boolean },
    notificaciones: {
        telegram: [{ type: String }],
        whatsapp: [{ type: String }],
        email: [{ type: String }],
        sms: [{ type: String }],
    },
    telegramChatId: { type: String },
    email: { type: String },
    telefono: { type: String },
});
exports.SUsuario.virtual('cliente', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCliente',
    ref: 'clientes',
});
exports.SUsuario.virtual('aplicaciones', {
    foreignField: '_id',
    justOne: false,
    localField: 'idAplicaciones',
    ref: 'aplicaciones',
});
