"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOperario = void 0;
const mongoose_1 = require("mongoose");
exports.SOperario = new mongoose_1.Schema({
    idUsuario: { type: mongoose_1.Types.ObjectId, required: true },
    permisos: { type: Object },
});
