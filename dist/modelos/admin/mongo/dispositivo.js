"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDispositivoAdmin = void 0;
const mongoose_1 = require("mongoose");
exports.SDispositivoAdmin = new mongoose_1.Schema({
    idApplicationServer: { type: mongoose_1.Types.ObjectId, ref: 'applicationServers' },
    deveui: { type: String, required: true, unique: true },
    deviceName: { type: String, required: true, unique: true },
    tipo: { type: String, required: true },
    idLote: { type: mongoose_1.Types.ObjectId, required: true, ref: 'lotes' },
    idCliente: { type: mongoose_1.Types.ObjectId, required: true, ref: 'clientes' },
    deviceProfileId: { type: String },
});
exports.SDispositivoAdmin.virtual('applicationServer', {
    foreignField: '_id',
    justOne: true,
    localField: 'idApplicationServer',
    ref: 'applicationServers',
});
exports.SDispositivoAdmin.virtual('lote', {
    foreignField: '_id',
    justOne: true,
    localField: 'idLote',
    ref: 'lotes',
});
exports.SDispositivoAdmin.virtual('cliente', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCliente',
    ref: 'clientes',
});
