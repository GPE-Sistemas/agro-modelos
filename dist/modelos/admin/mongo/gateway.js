"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGateway = void 0;
const mongoose_1 = require("mongoose");
exports.SGateway = new mongoose_1.Schema({
    idApplicationServer: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    gategayId: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    organizationId: { type: String, required: true },
    networkServerId: { type: String, required: true },
});
