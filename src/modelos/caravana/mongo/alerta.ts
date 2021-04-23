import { Document, Schema, Types } from 'mongoose';
import { IDispositivoCaravanaDb } from './dispositivo';

export interface IAlertaCaravanaDb extends Document {
    _id: Types.ObjectId;
    codigo: number;
    deveui: string;
    fecha: Date;
    idAsignado?: string;
    //
    dispositivo?: IDispositivoCaravanaDb;
}

export const SAlertaCaravana = new Schema<IAlertaCaravanaDb>({
    codigo: { type: Number, required: true },
    deveui: { type: String, required: true },
    fecha: { type: Date, required: true },
    idAsignado: { type: String },
});

SAlertaCaravana.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
