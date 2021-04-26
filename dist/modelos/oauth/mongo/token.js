"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SToken = void 0;
const mongoose_1 = require("mongoose");
exports.SToken = new mongoose_1.Schema({
    accessToken: { type: String },
    accessTokenExpiresAt: { type: Date },
    refreshToken: { type: String },
    refreshTokenExpiresAt: { type: Date },
    client: { type: Object },
    user: { type: Object },
});
exports.SToken.index({ 'refreshTokenExpiresAt': 1 }, { expireAfterSeconds: 0 });
