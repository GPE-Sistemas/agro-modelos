import { Document, Schema, Types } from 'mongoose';
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
    // dispositivos?: IDispositivoDb[];
    establecimiento?: IEstablecimientoDb;
    lote?: ILoteSilobolsaDb;
}

export const SSilobolsa = new Schema<ISilobolsaDb>({
    idEstablecimiento: { type: Types.ObjectId, ref: 'establecimientos', required: true },
    idLote: { type: Types.ObjectId, ref: 'lotes-silobolsas', required: true },
    deveuiDispositivos: [{ type: String }],
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
