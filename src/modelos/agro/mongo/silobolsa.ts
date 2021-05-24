import { Document, Schema, Types } from 'mongoose';
import { IDispositivoDb } from '../../shared';
import { IEstablecimientoDb } from './establecimiento';
import { ILoteSilobolsaDb } from './lote-silobolsa';

export interface ISilobolsaDb extends Document {
    _id: Types.ObjectId;
    idEstablecimiento: string;
    idLote: string;
    deveuiDispositivos: string[];
    numero: string;
    metros: number;
    especie: string;
    cosecha: string;
    producto: string;
    fechaConfeccion: Date;
    //
    establecimiento?: IEstablecimientoDb;
    lote?: ILoteSilobolsaDb;
    dispositivos?: IDispositivoDb;
}

export const SSilobolsa = new Schema<ISilobolsaDb>({
    idEstablecimiento: { type: Types.ObjectId, ref: 'establecimientos', required: true },
    idLote: { type: Types.ObjectId, ref: 'lotes-silobolsas' },
    deveuiDispositivos: [{ type: String, ref: 'dispositivos' }],
    numero: { type: String, required: true },
    metros: { type: Number },
    especie: { type: String, required: true },
    cosecha: { type: String, required: true },
    producto: { type: String, required: true },
    fechaConfeccion: { type: Date, required: true },
});

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
    ref: 'lotes-silobolsas',
});

SSilobolsa.virtual('dispositivos', {
    foreignField: 'deveui',
    justOne: false,
    localField: 'deveuiDispositivos',
    ref: 'dispositivos',
});
