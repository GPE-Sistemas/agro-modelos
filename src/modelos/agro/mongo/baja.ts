import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
import { IEstablecimientoDb } from './establecimiento';
import { ITipoBajaDb } from './tipoBaja';

export interface IBajaDb extends Document {
    _id: Types.ObjectId;
    fecha: string;
    idTipoBaja: Types.ObjectId;
    idAnimal: Types.ObjectId;
    idEstablecimiento: Types.ObjectId;
    observaciones: string;
    //
    tipoBaja?: ITipoBajaDb;
    animal?: IAnimalDb;
    establecimiento?: IEstablecimientoDb;
}

export const SBaja = new Schema<IBajaDb>({
    fecha: { type: Date, required: true },
    idTipoBaja: { type: Types.ObjectId, required: true, ref: 'tiposBajas' },
    idAnimal: { type: Types.ObjectId, required: true, ref: 'animales' },
    idEstablecimiento: { type: Types.ObjectId, ref: 'establecimientos' },
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

SBaja.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
