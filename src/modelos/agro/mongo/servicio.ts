import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
import { IEstablecimientoDb } from './establecimiento';

export interface IServicioDb extends Document {
    _id: Types.ObjectId;
    idAnimal: Types.ObjectId;
    idEstablecimiento: Types.ObjectId;
    fechaInicio: string;
    fechaFin: string;
    observaciones: string;
    //
    animal?: IAnimalDb;
    establecimiento?: IEstablecimientoDb;
}

export const SServicio = new Schema<IServicioDb>({
    idAnimal: { type: Types.ObjectId, required: true, ref: 'animales' },
    idEstablecimiento: { type: Types.ObjectId, ref: 'establecimientos' },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true },
    observaciones: { type: String },
});

SServicio.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAnimal',
    ref: 'animales',
});

SServicio.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
