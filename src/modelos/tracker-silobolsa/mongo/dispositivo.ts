import { Document, Schema, Types } from 'mongoose';
import { IDispositivoDb } from '../../shared/mongo/dispositivo';
import { IReporteTrackerSilobolsaDb } from './reporte';

// Lo que devuelve la db
export interface IDispositivoTrackerSilobolsaDb extends Document, IDispositivoDb {
    _id: Types.ObjectId;
    fechaAsignacion: Date;
    idUltimoReporte: Types.ObjectId;
    idSilobolsa: string;
    posicion: number;
    firmware: string;
    sensibilidad: number;
    // Populate
    ultimoReporte?: IReporteTrackerSilobolsaDb;
}

export const SDispositivoTrackerSilobolsa = new Schema<IDispositivoTrackerSilobolsaDb>({
    // Base
    adr: { type: Boolean },
    deveui: { type: String, required: true, unique: true, trim: true, minlength: 16, maxlength: 16 },
    deviceName: { type: String, unique: true, sparse: true },
    dr: { type: Number },
    fCnt: { type: String },
    fechaUltimoUplink: { type: Date },
    metadatos: { type: Array },
    red: { type: String, required: true },
    // Especificos
    fechaAsignacion: { type: Date },
    idUltimoReporte: { type: Types.ObjectId },
    idSilobolsa: { type: String },
    posicion: { type: Number },
    firmware: { type: String },
    sensibilidad: { type: Number },
});

SDispositivoTrackerSilobolsa.index({ idSilobolsa: 1 }, { sparse: true });
SDispositivoTrackerSilobolsa.index({ deveui: 1 });

SDispositivoTrackerSilobolsa.virtual('ultimoReporte', {
    foreignField: '_id',
    justOne: true,
    localField: 'idUltimoReporte',
    ref: 'reportes',
});
