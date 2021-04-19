import { Document, Schema, Types } from 'mongoose';
import { IDispositivoDb, SDispositivo } from './dispositivo';

export interface IAlertaDb extends Document {
    _id: Types.ObjectId;
    codigo: number;
    deveui: string;
    fecha: Date;
    idAsignado?: string;
    //
    dispositivo?: IDispositivoDb;
}

export const SAlerta = new Schema<IAlertaDb>({
    codigo: { type: Number, required: true },
    deveui: { type: String, required: true },
    fecha: { type: Date, required: true },
    idAsignado: { type: String },
});

SDispositivo.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
