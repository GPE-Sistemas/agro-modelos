"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGrupo = void 0;
const mongoose_1 = require("mongoose");
exports.SGrupo = new mongoose_1.Schema({
    nombre: { type: String, required: true, trim: true },
    idEstablecimiento: { type: mongoose_1.Types.ObjectId, required: true, ref: 'establecimientos' },
});
exports.SGrupo.index({ nombre: 1, idEstablecimiento: 1 }, { unique: true });
exports.SGrupo.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
