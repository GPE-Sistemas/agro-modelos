import { Document, Schema, Types } from 'mongoose';
import { IReporteCorrectoraDb } from '../../correctoras';

export interface ICorrectoraDb extends Document {
    numeroSerie?: string;
    deveui: string;
    modelo: string;
    fechaAsignacion: Date;
    firmware: string;
    idUltimoReporte: Types.ObjectId;
    bateria: number;
    //
    ultimoReporte: IReporteCorrectoraDb;
}

export const SCorrectora = new Schema<ICorrectoraDb>({
    firmware: { type: String },
    numeroSerie: { type: String, required: true, unique: true },
    deveui: { type: String },
    modelo: { type: String },
    idUltimoReporte: { type: Types.ObjectId, ref: 'reportes' },
    fechaAsignacion: { type: Date },
    bateria: { type: Number },
});

SCorrectora.virtual('ultimoReporte', {
    foreignField: '_id',
    justOne: true,
    localField: 'idUltimoReporte',
    ref: 'reportes',
});
