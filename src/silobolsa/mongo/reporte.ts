import { Document, Schema, Types } from 'mongoose';

export interface IReporteSilobolsaDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    idSilobolsa?: string;
    fecha: Date;
    co2: number;
    temperatura: number;
    humedad: number;
    bateria: number;
}

export const SReporteSilobolsa = new Schema<IReporteSilobolsaDb>({
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    idSilobolsa: { type: String },
    fecha: { type: Date, required: true },
    co2: { type: Number },
    temperatura: { type: Number },
    humedad: { type: Number },
    bateria: { type: Number },
});

SReporteSilobolsa.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
