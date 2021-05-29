import { Document, Schema, Types } from 'mongoose';
import { IReporteSilobolsaDb } from './reporte';
import { IDispositivoDb } from '../../shared/mongo/dispositivo';

// Lo que devuelve la db
export interface IDispositivoSilobolsaDb extends Document, IDispositivoDb {
    _id: Types.ObjectId;
    alarmaActiva: boolean;
    fechaAsignacion: Date;
    idUltimoReporte: Types.ObjectId;
    idSilobolsa: string;
    posicion: number;
    // Populate
    ultimoReporte?: IReporteSilobolsaDb;
}

export const SDispositivoSilobolsa = new Schema<IDispositivoSilobolsaDb>({
    // Base
    adr: { type: Boolean },
    deveui: { type: String, required: true, unique: true, trim: true, minlength: 16, maxlength: 16 },
    deviceName: { type: String, unique: true, sparse: true },
    dr: { type: Number },
    fCnt: { type: String },
    fechaUltimoUplink: { type: Date },
    metadatos: { type: Array },
    red: { type: String, required: true },
    // Especificos Silobolsa
    alarmaActiva: { type: Boolean },
    fechaAsignacion: { type: Date },
    idUltimoReporte: { type: Types.ObjectId },
    idSilobolsa: { type: String },
    posicion: { type: Number },
});

SDispositivoSilobolsa.index({ idSilobolsa: 1 }, { sparse: true });
SDispositivoSilobolsa.index({ deveui: 1 });

SDispositivoSilobolsa.virtual('ultimoReporte', {
    foreignField: '_id',
    justOne: true,
    localField: 'idUltimoReporte',
    ref: 'reportes',
});
