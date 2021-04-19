import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../';
// import { IDispositivoDb } from './dispositivo';

export interface IReporteDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    fecha: Date;
    idAsignado?: string;
    ubicacion: ICoordenadas;
    //
    // dispositivo?: IDispositivoDb;
}

export const SReporte = new Schema<IReporteDb>({
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    fecha: { type: Date, required: true },
    idAsignado: { type: String },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
});

SReporte.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
