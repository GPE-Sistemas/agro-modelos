import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';

export interface IPesajeDb extends Document {
    _id: Types.ObjectId;
    idAnimal: Types.ObjectId;
    fecha: string;
    peso: number;
    observaciones: string;
    //
    animal?: IAnimalDb;
}

export const SPesaje = new Schema<IPesajeDb>({
    idAnimal: { type: Types.ObjectId, required: true, ref: 'animales' },
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
