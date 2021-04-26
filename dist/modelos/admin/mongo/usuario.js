"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUsuario = void 0;
const mongoose_1 = require("mongoose");
exports.SUsuario = new mongoose_1.Schema({
    usuario: { type: String, required: true, unique: true },
    clave: { type: String, required: true },
    idCliente: { type: String, required: true, ref: 'clientes' },
});
