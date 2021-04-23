import { Document, Schema, Types } from 'mongoose';
import { ITipoBajaDb } from './tipoBaja';

export interface IBajaDb extends Document {
    _id: Types.ObjectId;
    fecha: string;
    idTipoBaja: string;
    observaciones: string;
    //
    tipoBaja?: ITipoBajaDb;
}

export const SBaja = new Schema<IBajaDb>({
    fecha: { type: Date, required: true },
    idTipoBaja: { type: Types.ObjectId, required: true },
    observaciones: { type: String },
});

SBaja.virtual('tipoBaja', {
    foreignField: '_id',
    justOne: true,
    localField: 'idTipoBaja',
    ref: 'tiposBajas',
});
