import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
import { IEstablecimientoDb } from './establecimiento';

export interface IEventoEspecificoDb extends Document {
    _id: Types.ObjectId;
    idAnimal: Types.ObjectId;
    idEstablecimiento: Types.ObjectId;
    fecha: string;
    titulo: string;
    observaciones: string;
    //
    animal?: IAnimalDb;
    establecimiento?: IEstablecimientoDb;
}

export const SEventoEspecifico = new Schema<IEventoEspecificoDb>({
    idAnimal: { type: Types.ObjectId, required: true, ref: 'animales' },
    idEstablecimiento: { type: Types.ObjectId, ref: 'establecimientos' },
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

SEventoEspecifico.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
