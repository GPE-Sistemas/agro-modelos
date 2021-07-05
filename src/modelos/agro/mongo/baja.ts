import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
import { ITipoBajaDb } from './tipoBaja';

export interface IBajaDb extends Document {
    _id: Types.ObjectId;
    fecha: string;
    idTipoBaja: Types.ObjectId;
    idAnimal: Types.ObjectId;
    observaciones: string;
    //
    tipoBaja?: ITipoBajaDb;
    animal?: IAnimalDb;
}

export const SBaja = new Schema<IBajaDb>({
    fecha: { type: Date, required: true },
    idTipoBaja: { type: Types.ObjectId, required: true, ref: 'tiposBajas' },
    idAnimal: { type: Types.ObjectId, required: true, ref: 'animales' },
    observaciones: { type: String },
});

SBaja.virtual('tipoBaja', {
    foreignField: '_id',
    justOne: true,
    localField: 'idTipoBaja',
    ref: 'tiposBajas',
});

SBaja.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAnimal',
    ref: 'animales',
});
