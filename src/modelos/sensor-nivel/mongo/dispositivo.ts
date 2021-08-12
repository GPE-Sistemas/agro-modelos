import { Document, Schema, Types } from 'mongoose';
import { IReporteSensorNivelDb } from './reporte';
import { IDispositivoDb } from '../../shared/mongo/dispositivo';
import { ICoordenadas } from '../../shared';

// Lo que devuelve la db
export interface IDispositivoSensorNivelDb extends Document, IDispositivoDb {
    _id: Types.ObjectId;
    idUltimoReporte: Types.ObjectId;
    ubicacion: ICoordenadas;
    firmware: string;
    fechaAsignacion: Date,
    idAsignado: string,
    // Populate
    ultimoReporte?: IReporteSensorNivelDb;
}

export const SDispositivoSensorNivel = new Schema<IDispositivoSensorNivelDb>({
    // Base
    adr: { type: Boolean },
    deveui: { type: String, required: true, unique: true, trim: true, minlength: 16, maxlength: 16 },
    deviceName: { type: String, unique: true, sparse: true },
    dr: { type: Number },
    fCnt: { type: String },
    fechaUltimoUplink: { type: Date },
    metadatos: { type: Array },
    red: { type: String, required: true },
    // Especificos SensorNivel
    idUltimoReporte: { type: Types.ObjectId, ref: 'reportes' },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    firmware: { type: String },
    fechaAsignacion: { type: Date },
    idAsignado: { type: String },
});

SDispositivoSensorNivel.index({ deveui: 1 });

SDispositivoSensorNivel.virtual('ultimoReporte', {
    foreignField: '_id',
    justOne: true,
    localField: 'idUltimoReporte',
    ref: 'reportes',
});
