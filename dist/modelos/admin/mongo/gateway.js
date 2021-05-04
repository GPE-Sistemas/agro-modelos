"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGateway = void 0;
const mongoose_1 = require("mongoose");
exports.SGateway = new mongoose_1.Schema({
    idApplicationServer: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    gatewayId: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    organizationId: { type: String, required: true },
    networkServerId: { type: String, required: true },
    coordenadas: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    gpsDiferencial: { type: Boolean },
});
exports.SGateway.virtual('applicationServer', {
    foreignField: '_id',
    justOne: true,
    localField: 'idApplicationServer',
    ref: 'applicationServers',
});
