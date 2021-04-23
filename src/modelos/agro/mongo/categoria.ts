import { Document, Schema, Types } from 'mongoose';
import { IEspecieDb } from './especie';

export interface ICategoriaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEspecie: Types.ObjectId;
    sexo?: boolean;
    edadMinMeses?: number;
    edadMaxMeses?: number;
    //
    especie?: IEspecieDb;
}

export const SCategoria = new Schema<ICategoriaDb>({
    nombre: { type: String, required: true },
    idEspecie: { type: Types.ObjectId, required: true, ref: 'especies' },
    sexo: { type: Boolean },
    edadMinMeses: { type: Number },
    edadMaxMeses: { type: Number },
});

SCategoria.virtual('especie', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEspecie',
    ref: 'especies',
});
