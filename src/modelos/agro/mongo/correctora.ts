import { Document, Schema, Types } from 'mongoose';

export interface ICorrectoraDb extends Document {
    numeroSerie?: string;
    deveui: string;
    modelo: string;
    fechaAsignacion: Date;
    firmware: string;
    idUltimoReporte: Types.ObjectId;
    bateria: number;
}

export const SCorrectora = new Schema<ICorrectoraDb>({
    firmware: { type: String },
    numeroSerie: { type: String, required: true, unique: true },
    deveui: { type: String },
    modelo: { type: String },
    idUltimoReporte: { type: Types.ObjectId },
    fechaAsignacion: { type: Date },
    bateria: { type: Number },
});
