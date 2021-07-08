import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared/coordenadas';
import { IEstablecimientoDb } from './establecimiento';

export interface ICorralDb extends Document {
    _id: Types.ObjectId;
    color: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idEstablecimiento: Types.ObjectId;
    //
    establecimiento?: IEstablecimientoDb;
}
export const SCorral = new Schema<ICorralDb>({
    color: { type: String },
    nombre: { type: String, required: true, unique: true },
    coordenadas: [{ type: Object, required: true }],
    idEstablecimiento: { type: Types.ObjectId, required: true, ref: 'establecimientos' },
});

SCorral.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
