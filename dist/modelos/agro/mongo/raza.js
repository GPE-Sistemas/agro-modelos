"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SRaza = void 0;
const mongoose_1 = require("mongoose");
exports.SRaza = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    idEspecie: { type: mongoose_1.Types.ObjectId, required: true, ref: 'especies' },
});
exports.SRaza.virtual('especie', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEspecie',
    ref: 'especies',
});
