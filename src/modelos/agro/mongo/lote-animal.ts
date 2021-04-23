import { Document, Schema, Types } from 'mongoose';
import { IEstablecimientoDb } from './establecimiento';

export interface ILoteAnimalDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEstablecimiento: string;
    //
    establecimiento?: IEstablecimientoDb;
}

export const SLoteAnimal = new Schema<ILoteAnimalDb>({
    nombre: { type: String, required: true, trim: true },
    idEstablecimiento: { type: Types.ObjectId, required: true, ref: 'establecimientos' },
});

SLoteAnimal.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
