"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDispositivoAdmin = void 0;
const mongoose_1 = require("mongoose");
exports.SDispositivoAdmin = new mongoose_1.Schema({
    applicationServerId: { type: String },
    deviceName: { type: String, required: true, unique: true },
    deveui: { type: String, required: true, unique: true },
    tipo: { type: String, required: true },
    idLote: { type: String, required: true, ref: 'lotes' },
    idCliente: { type: String, required: true, ref: 'clientes' },
    applicationId: { type: String },
    deviceProfileId: { type: String },
});
