import { Document, Schema, Types } from 'mongoose';
import { IReporteSilobolsaDb } from './reporte';
import { IDispositivoDb } from '../../shared/mongo/dispositivo';

// Lo que devuelve la db
export interface IDispositivoSilobolsaDb extends Document, IDispositivoDb {
    _id: Types.ObjectId;
    alarmaActiva: boolean;
    idUltimoReporte: Types.ObjectId;
    // Carga manual
    idExterno: string;
    fechaAsignacion: Date;
    idSilobolsa: string;
    posicion: number;
    // Populate
    ultimoReporte?: IReporteSilobolsaDb;
}

export const SDispositivoSilobolsa = new Schema<IDispositivoSilobolsaDb>({
    adr: { type: Boolean },
    dr: { type: Number },
    deveui: { type: String, required: true, unique: true, trim: true, minlength: 16, maxlength: 16 },
    fCnt: { type: Number },
    metadatos: { type: Array },
    red: { type: String, required: true },
    idUltimoReporte: { type: Types.ObjectId, ref: 'reportes' },
    fechaUltimoUplink: { type: Date },
    alarmaActiva: { type: Boolean },
    // Carga manual
    deviceName: { type: String, unique: true, sparse: true },
    fechaAsignacion: { type: Date },
    idSilobolsa: { type: String },
    posicion: { type: Number },
});

SDispositivoSilobolsa.virtual('ultimoReporte', {
    foreignField: '_id',
    justOne: true,
    localField: 'idUltimoReporte',
    ref: 'reportes',
});
