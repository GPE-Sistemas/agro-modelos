import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas, IDispositivoDb } from '../../shared';
import { IEstablecimientoDb } from './establecimiento';
import { ILoteDb } from './lote';

export interface ISilobolsaDb extends Document {
    _id: Types.ObjectId;
    idEstablecimiento: Types.ObjectId;
    idLote: Types.ObjectId;
    deveuiLanzas: string[];
    deveuiTrackers: string[];
    numero: string;
    metros: number;
    especie: string;
    cosecha: string;
    producto: string;
    fechaConfeccion: Date;
    activa: boolean;
    fechaDesmantelacion: Date;
    ubicacion: ICoordenadas;
    //
    establecimiento?: IEstablecimientoDb;
    lote?: ILoteDb;
    dispositivos?: IDispositivoDb;
}

export const SSilobolsa = new Schema<ISilobolsaDb>({
    idEstablecimiento: { type: Types.ObjectId, ref: 'establecimientos', required: true },
    idLote: { type: Types.ObjectId, ref: 'lotes' },
    deveuiLanzas: [{ type: String, ref: 'dispositivos' }],
    deveuiTrackers: [{ type: String, ref: 'dispositivos' }],
    numero: { type: String, required: true },
    metros: { type: Number },
    especie: { type: String, required: true },
    cosecha: { type: String, required: true },
    producto: { type: String, required: true },
    fechaConfeccion: { type: Date, required: true },
    activa: { type: Boolean },
    fechaDesmantelacion: { type: Date },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
});

SSilobolsa.index({ activa: 1, numero: 1 });
SSilobolsa.index({ activa: 1, fechaConfeccion: -1 });

SSilobolsa.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});

SSilobolsa.virtual('lote', {
    foreignField: '_id',
    justOne: true,
    localField: 'idLote',
    ref: 'lotes',
});
