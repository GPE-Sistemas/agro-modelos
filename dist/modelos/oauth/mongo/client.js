"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SClient = void 0;
const mongoose_1 = require("mongoose");
exports.SClient = new mongoose_1.Schema({
    clientId: { type: String },
    clientSecret: { type: String },
    grants: [{ type: String }],
    redirectUris: [{ type: String }],
});
