import { Document, Schema, Types } from 'mongoose';
import { IEstablecimientoDb } from './establecimiento';

export interface IGrupoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEstablecimiento: Types.ObjectId;
    //
    establecimiento?: IEstablecimientoDb;
}

export const SGrupo = new Schema<IGrupoDb>({
    nombre: { type: String, required: true, trim: true },
    idEstablecimiento: { type: Types.ObjectId, required: true, ref: 'establecimientos' },
});

SGrupo.index({ nombre: 1, idEstablecimiento: 1 }, { unique: true });

SGrupo.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
