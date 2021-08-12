import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
import { IEstablecimientoDb } from './establecimiento';

export interface IPesajeDb extends Document {
    _id: Types.ObjectId;
    idAnimal: Types.ObjectId;
    idEstablecimiento: Types.ObjectId;
    fecha: string;
    peso: number;
    observaciones: string;
    //
    animal?: IAnimalDb;
    establecimiento?: IEstablecimientoDb;
}

export const SPesaje = new Schema<IPesajeDb>({
    idAnimal: { type: Types.ObjectId, required: true, ref: 'animales' },
    idEstablecimiento: { type: Types.ObjectId, ref: 'establecimientos' },
    fecha: { type: Date, required: true },
    peso: { type: Number, min: 0 },
    observaciones: { type: String },
});

SPesaje.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAnimal',
    ref: 'animales',
});

SPesaje.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
