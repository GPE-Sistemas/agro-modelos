"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCliente = void 0;
const mongoose_1 = require("mongoose");
exports.SCliente = new mongoose_1.Schema({
    nombre: { type: String, required: true, unique: true },
    idApplicationServer: { type: mongoose_1.Types.ObjectId, ref: 'applicationServers' },
    idAplicaciones: [{ type: mongoose_1.Types.ObjectId, ref: 'aplicaciones' }],
    networkServerId: { type: String },
    organizationId: { type: String },
    serviceProfileId: { type: String },
    applications: [{ type: Object }],
    gateways: [{ type: Object }],
    admin: { type: Boolean },
    activo: { type: Boolean },
    gatewayIds: [{ type: String }],
});
exports.SCliente.virtual('applicationServer', {
    foreignField: '_id',
    justOne: true,
    localField: 'idApplicationServer',
    ref: 'applicationServers',
});
exports.SCliente.virtual('aplicaciones', {
    foreignField: '_id',
    justOne: false,
    localField: 'idAplicaciones',
    ref: 'aplicaciones',
});
