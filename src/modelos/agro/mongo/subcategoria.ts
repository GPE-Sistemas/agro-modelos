import { Document, Schema, Types } from 'mongoose';
import { ICategoriaDb } from './categoria';

export interface ISubcategoriaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    pesoMin?: number;
    pesoMax?: number;
    idCategoria: Types.ObjectId;
    //
    categoria?: ICategoriaDb;
}

export const SSubcategoria = new Schema<ISubcategoriaDb>({
    nombre: { type: String, required: true },
    pesoMin: { type: Number },
    pesoMax: { type: Number },
    idCategoria: { type: Types.ObjectId, required: true, ref: 'categorias' },
});

SSubcategoria.index({ nombre: 1, idCategoria: 1 }, { unique: true });

SSubcategoria.virtual('categoria', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCategoria',
    ref: 'categorias',
});
