import { Document, Schema, Types } from 'mongoose';
import { IEspecieDb } from './especie';

export interface IRazaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEspecie: Types.ObjectId;
    //
    especie?: IEspecieDb;
}

export const SRaza = new Schema<IRazaDb>({
    nombre: { type: String, required: true },
    idEspecie: { type: Types.ObjectId, required: true, ref: 'especies' },
});

SRaza.index({ nombre: 1, idEspecie: 1 }, { unique: true });

SRaza.virtual('especie', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEspecie',
    ref: 'especies',
});
