import { Document, Schema, Types } from 'mongoose';
import { IAcelerometro } from '../acelerometro';
import { IReporteCaravanaDb } from './reporte';
import { IDispositivoDb } from '../../shared/mongo/dispositivo';

// Lo que devuelve la db
export interface IDispositivoCaravanaDb extends Document, IDispositivoDb {
    _id: Types.ObjectId;
    acelerometro: IAcelerometro;
    fechaAsignacion: Date;
    frecuenciaReporte: string;
    idAsignado: string;
    idUltimoReporte: Types.ObjectId;
    //
    ultimoReporte: IReporteCaravanaDb;
}

export const SDispositivoCaravana = new Schema<IDispositivoCaravanaDb>({
    // Base
    adr: { type: Boolean },
    deveui: { type: String, required: true, unique: true, trim: true, minlength: 16, maxlength: 16 },
    deviceName: { type: String, unique: true, sparse: true },
    dr: { type: Number },
    fCnt: { type: String },
    fechaUltimoUplink: { type: Date },
    metadatos: { type: Array },
    red: { type: String, required: true },
    // Especificos Caravana
    acelerometro: { type: Object },
    fechaAsignacion: { type: Date },
    frecuenciaReporte: { type: String },
    idAsignado: { type: String },
    idUltimoReporte: { type: Types.ObjectId, ref: 'reportes' },
});

SDispositivoCaravana.virtual('ultimoReporte', {
    foreignField: '_id',
    justOne: true,
    localField: 'idUltimoReporte',
    ref: 'reportes',
});
