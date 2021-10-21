import { Document, Schema, Types } from 'mongoose';
import { IReporteSensorNivelDTO } from '../..';
import { ICoordenadas, IDispositivoDb } from '../../shared';
import { IEstablecimientoDb } from './establecimiento';
import { ILoteDb } from './lote';

export interface ISensorNivelDb extends Document {
    activo: boolean;
    deveui: string;
    fechaCreacion: Date;
    ubicacion: ICoordenadas;
    idEstablecimiento: Types.ObjectId;
    idLote: Types.ObjectId;
    nombre: string;
    offset: number;
    ultimoReporte: IReporteSensorNivelDTO;
    //
    establecimiento?: IEstablecimientoDb;
    lote?: ILoteDb;
    dispositivo?: IDispositivoDb;
}

export const SSensorNivel = new Schema<ISensorNivelDb>({
    activo: { type: Boolean, default: true },
    deveui: { type: String },
    fechaCreacion: { type: Date },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    idEstablecimiento: { type: Types.ObjectId, ref: 'establecimientos' },
    idLote: { type: Types.ObjectId, ref: 'lotes' },
    nombre: { type: String },
    offset: { type: Number },
    ultimoReporte: { type: Object },
});

SSensorNivel.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});

SSensorNivel.virtual('lote', {
    foreignField: '_id',
    justOne: true,
    localField: 'idLote',
    ref: 'lotes',
});

SSensorNivel.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
