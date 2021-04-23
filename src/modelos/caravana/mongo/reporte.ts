import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../';

export interface IReporteCaravanaDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    fecha: Date;
    idAsignado?: string;
    ubicacion: ICoordenadas;
}

export const SReporteCaravana = new Schema<IReporteCaravanaDb>({
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    fecha: { type: Date, required: true },
    idAsignado: { type: String },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
});

SReporteCaravana.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
