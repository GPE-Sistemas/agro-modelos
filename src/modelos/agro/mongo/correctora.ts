import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IEstablecimientoDb } from './establecimiento';
import { ILoteDb } from './lote';

export interface ICorrectoraDb extends Document {
    numeroSerie?: string;
    deveui: string;
    modelo: string;
    fechaAsignacion: Date;
    firmware: string;
    bateria: number;
    activa: boolean;
    ubicacion: ICoordenadas;
    idEstablecimiento: Types.ObjectId;
    idLote: Types.ObjectId;
    //
    establecimiento?: IEstablecimientoDb;
    lote?: ILoteDb;
}

export const SCorrectora = new Schema<ICorrectoraDb>({
    firmware: { type: String },
    numeroSerie: { type: String, required: true, unique: true },
    deveui: { type: String },
    modelo: { type: String },
    fechaAsignacion: { type: Date },
    bateria: { type: Number },
    activa: { type: Boolean, required: true },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    idEstablecimiento: { type: Types.ObjectId, ref: 'establecimientos' },
    idLote: { type: Types.ObjectId, ref: 'lotes' },
});

SCorrectora.index({ numeroSerie: 1 });
SCorrectora.index({ deveui: 1 });
SCorrectora.index({ fechaAsignacion: -1 });

SCorrectora.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});

SCorrectora.virtual('lote', {
    foreignField: '_id',
    justOne: true,
    localField: 'idLote',
    ref: 'lotes',
});
