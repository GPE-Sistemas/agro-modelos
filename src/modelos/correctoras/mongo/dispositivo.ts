import { Document, Schema, Types } from 'mongoose';
import { IReporteCorrectoraDb } from './reporte';
import { IDispositivoDb } from '../../shared/mongo/dispositivo';

// Lo que devuelve la db
export interface IDispositivoCorrectoraDb extends Document, IDispositivoDb {
    _id: Types.ObjectId;
    firmware: string;
    fechaAsignacion: Date;
    numeroSerieCorrectora: string;
    idUltimoReporte: Types.ObjectId;
    //
    ultimoReporte: IReporteCorrectoraDb;
}

export const SDispositivoCorrectora = new Schema<IDispositivoCorrectoraDb>({
    // Base
    adr: { type: Boolean },
    deveui: { type: String, required: true, unique: true, trim: true, minlength: 16, maxlength: 16 },
    deviceName: { type: String, unique: true, sparse: true },
    dr: { type: Number },
    fCnt: { type: Number },
    fechaUltimoUplink: { type: Date },
    metadatos: { type: Array },
    red: { type: String, required: true },
    // Especificos Correctora
    firmware: { type: String },
    fechaAsignacion: { type: Date },
    numeroSerieCorrectora: { type: String },
    idUltimoReporte: { type: Types.ObjectId, ref: 'reportes' },
});

SDispositivoCorrectora.virtual('ultimoReporte', {
    foreignField: '_id',
    justOne: true,
    localField: 'idUltimoReporte',
    ref: 'reportes',
});
