"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAnimal = void 0;
const mongoose_1 = require("mongoose");
exports.SAnimal = new mongoose_1.Schema({
    activo: { type: Boolean, required: true },
    caravana: { type: String, required: true, unique: true },
    fechaAlta: { type: Date, required: true },
    deveui: { type: String },
    dientes: { type: Number },
    fechaNacimiento: { type: Date },
    foto: { type: String },
    idBaja: { type: mongoose_1.Types.ObjectId, ref: 'bajas' },
    idCategoria: { type: mongoose_1.Types.ObjectId, ref: 'categorias' },
    idEspecie: { type: mongoose_1.Types.ObjectId, ref: 'especies' },
    idEstablecimiento: { type: mongoose_1.Types.ObjectId, ref: 'establecimientos' },
    idGrupo: { type: mongoose_1.Types.ObjectId, ref: 'grupos' },
    idLote: { type: mongoose_1.Types.ObjectId, ref: 'lotes' },
    idMadre: { type: mongoose_1.Types.ObjectId, ref: 'animales' },
    idPadre: { type: mongoose_1.Types.ObjectId, ref: 'animales' },
    idRaza: { type: mongoose_1.Types.ObjectId, ref: 'razas' },
    idSubcategoria: { type: mongoose_1.Types.ObjectId, ref: 'subcategorias' },
    sexo: { type: Boolean },
});
exports.SAnimal.index({ caravana: 1 });
exports.SAnimal.index({ deveui: 1 });
exports.SAnimal.index({ activo: 1 });
exports.SAnimal.virtual('baja', {
    foreignField: '_id',
    justOne: true,
    localField: 'idBaja',
    ref: 'bajas',
});
exports.SAnimal.virtual('categoria', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCategoria',
    ref: 'categorias',
});
exports.SAnimal.virtual('lote', {
    foreignField: '_id',
    justOne: true,
    localField: 'idLote',
    ref: 'lotes',
});
exports.SAnimal.virtual('raza', {
    foreignField: '_id',
    justOne: true,
    localField: 'idRaza',
    ref: 'razas',
});
exports.SAnimal.virtual('subcategoria', {
    foreignField: '_id',
    justOne: true,
    localField: 'idSubcategoria',
    ref: 'subcategorias',
});
exports.SAnimal.virtual('especie', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEspecie',
    ref: 'especies',
});
exports.SAnimal.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
exports.SAnimal.virtual('grupo', {
    foreignField: '_id',
    justOne: true,
    localField: 'idGrupo',
    ref: 'grupos',
});
exports.SAnimal.virtual('madre', {
    foreignField: '_id',
    justOne: true,
    localField: 'idMadre',
    ref: 'animales',
});
exports.SAnimal.virtual('padre', {
    foreignField: '_id',
    justOne: true,
    localField: 'idPadre',
    ref: 'animales',
});
