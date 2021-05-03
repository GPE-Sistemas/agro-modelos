"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCliente = void 0;
const mongoose_1 = require("mongoose");
exports.SCliente = new mongoose_1.Schema({
    nombre: { type: String, required: true, unique: true },
    idApplicationServer: { type: mongoose_1.Types.ObjectId, ref: 'applicationServers' },
    networkServerId: { type: String },
    organizationId: { type: String },
    serviceProfileId: { type: String },
    applications: [{ type: Object }],
    gateways: [{ type: Object }],
    admin: { type: Boolean },
    activo: { type: Boolean },
    gatewayIds: [{ type: String }],
});
