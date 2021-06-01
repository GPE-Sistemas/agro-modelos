import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../';

export interface IReporteCaravanaDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    fecha: Date;
    idAnimal?: string;
    ubicacion: ICoordenadas;
    dentroCorral?: boolean;
    dentroEstablecimiento?: boolean;
}

export const SReporteCaravana = new Schema<IReporteCaravanaDb>({
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    fecha: { type: Date, required: true },
    idAnimal: { type: String },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    dentroCorral: { type: Boolean },
    dentroEstablecimiento: { type: Boolean },
});

SReporteCaravana.index({ deveui: 1, fecha: 1 });
SReporteCaravana.index({ idAnimal: 1, fecha: 1 }, { sparse: true });
SReporteCaravana.index({ idAnimal: 1, deveui: 1, fecha: 1 }, { sparse: true });

SReporteCaravana.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
