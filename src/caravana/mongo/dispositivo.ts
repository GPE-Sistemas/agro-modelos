import { Document, Schema, Types } from 'mongoose';
import { IAcelerometro } from '../acelerometro';
import { IMetadatos } from '../../';
import { IReporteDb } from './reporte';

// Lo que devuelve la db
export interface IDispositivoDb extends Document {
    _id: Types.ObjectId;
    acelerometro: IAcelerometro;
    adr: boolean;
    deveui: string;
    deviceName: string;
    dr: number;
    fCnt: number;
    fechaAsignacion: Date;
    fechaUltimoUplink: Date;
    frecuenciaReporte: string;
    idAsignado: string;
    idUltimoReporte: Types.ObjectId;
    metadatos: IMetadatos[];
    red: string;
    //
    ultimoReporte: IReporteDb;
}

export const SDispositivo = new Schema<IDispositivoDb>({
    acelerometro: { type: Object },
    adr: { type: Boolean },
    deveui: { type: String, required: true, unique: true, trim: true, minlength: 16, maxlength: 16 },
    deviceName: { type: String, unique: true, sparse: true },
    dr: { type: Number },
    fCnt: { type: Number },
    fechaAsignacion: { type: Date },
    fechaUltimoUplink: { type: Date },
    frecuenciaReporte: { type: String },
    idAsignado: { type: String },
    idUltimoReporte: { type: Types.ObjectId, ref: 'reportes' },
    metadatos: { type: Array },
    red: { type: String, required: true },
});

// SDispositivo.index(
//     { idExterno: 1 },
//     { partialFilterExpression: { idExterno: { $type: "string" } } },
//     // { partialFilterExpression: { idExterno: { $exists: true } } },
// );

SDispositivo.virtual('ultimoReporte', {
    foreignField: '_id',
    justOne: true,
    localField: 'idUltimoReporte',
    ref: 'reportes',
});
