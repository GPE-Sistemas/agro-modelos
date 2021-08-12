"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STratamiento = void 0;
const mongoose_1 = require("mongoose");
exports.STratamiento = new mongoose_1.Schema({
    idAnimal: { type: mongoose_1.Types.ObjectId, required: true, ref: 'animales' },
    idDiagnostico: { type: mongoose_1.Types.ObjectId, required: true, ref: 'diagnosticos' },
    idTipoTratamiento: { type: mongoose_1.Types.ObjectId, required: true, ref: 'tiposTratamientos' },
    idEstablecimiento: { type: mongoose_1.Types.ObjectId, ref: 'establecimientos' },
    fecha: { type: Date, required: true },
    producto: { type: String },
    observaciones: { type: String },
});
exports.STratamiento.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAnimal',
    ref: 'animales',
});
exports.STratamiento.virtual('diagnostico', {
    foreignField: '_id',
    justOne: true,
    localField: 'idDiagnostico',
    ref: 'diagnosticos',
});
exports.STratamiento.virtual('tipoTratamiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idTipoTratamiento',
    ref: 'tiposTratamientos',
});
exports.STratamiento.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
