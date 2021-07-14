import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared/coordenadas';
import { IEstablecimientoDb } from './establecimiento';

export interface ILoteDb extends Document {
    _id: Types.ObjectId;
    color: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idEstablecimiento: Types.ObjectId;
    //
    establecimiento?: IEstablecimientoDb;
}
export const SLote = new Schema<ILoteDb>({
    color: { type: String },
    nombre: { type: String, required: true, unique: true },
    coordenadas: [{ type: Object, required: true }],
    idEstablecimiento: { type: Types.ObjectId, required: true, ref: 'establecimientos' },
});

SLote.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
