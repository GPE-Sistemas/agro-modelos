import { Document, Schema, Types } from 'mongoose';
import { IEstablecimientoDb } from './establecimiento';

export interface ILoteDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEstablecimiento: string;
    //
    establecimiento?: IEstablecimientoDb;
}

export const SLote = new Schema<ILoteDb>({
    nombre: { type: String, required: true, trim: true },
    idEstablecimiento: { type: Types.ObjectId, required: true, ref: 'establecimientos' },
});

SLote.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
