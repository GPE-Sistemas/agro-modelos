import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';

export interface IServicioDb extends Document {
    _id: Types.ObjectId;
    idAnimal: Types.ObjectId;
    fecha: string;
    inicio: boolean;
    observaciones: string;
    //
    animal?: IAnimalDb;
}

export const SServicio = new Schema<IServicioDb>({
    idAnimal: { type: Types.ObjectId, required: true, ref: 'animales' },
    fecha: { type: Date, required: true },
    inicio: { type: Boolean },
    observaciones: { type: String },
});

SServicio.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAnimal',
    ref: 'animales',
});
