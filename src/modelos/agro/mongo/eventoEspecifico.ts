import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';

export interface IEventoEspecificoDb extends Document {
    _id: Types.ObjectId;
    idAnimal: string;
    fecha: string;
    titulo: string;
    observaciones: string;
    //
    animal?: IAnimalDb;
}

export const SEventoEspecifico = new Schema<IEventoEspecificoDb>({
    idAnimal: { type: Types.ObjectId, required: true, ref: 'animales' },
    fecha: { type: Date, required: true },
    titulo: { type: String },
    observaciones: { type: String },
});

SEventoEspecifico.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAnimal',
    ref: 'animales',
});
