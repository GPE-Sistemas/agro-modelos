import { Document, Schema, Types } from 'mongoose';
import { IEstablecimientoDb } from './establecimiento';

export interface ILoteSilobolsaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEstablecimiento: string;
    //
    establecimiento?: IEstablecimientoDb;
}

export const SLoteSilobolsa = new Schema<ILoteSilobolsaDb>({
    nombre: { type: String, required: true, trim: true },
    idEstablecimiento: { type: Types.ObjectId, required: true, ref: 'establecimientos' },
});

SLoteSilobolsa.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
