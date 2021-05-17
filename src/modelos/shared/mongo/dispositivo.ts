import { Schema, Types, Document } from 'mongoose';
import { IMetadatos } from '../metadatos';
import { IComandoDb } from './comando';

// Lo que devuelve la db
export interface IDispositivoDb extends Document {
    _id: Types.ObjectId;
    adr: boolean;
    deveui: string;
    deviceName: string;
    dr: number;
    fCnt: number;
    fechaUltimoUplink: Date;
    metadatos: IMetadatos[];
    red: string;
    tipo?: string;
    idUltimoComando: Types.ObjectId;
    // Populate
    ultimoComando: IComandoDb;
}

export const SDispositivo = new Schema<IDispositivoDb>({
    adr: { type: Boolean },
    deveui: { type: String, required: true, unique: true, trim: true, minlength: 16, maxlength: 16 },
    deviceName: { type: String, unique: true, sparse: true },
    dr: { type: Number },
    fCnt: { type: Number },
    fechaUltimoUplink: { type: Date },
    metadatos: { type: Array },
    red: { type: String, required: true },
    tipo: { type: String },
    idUltimoComando: { type: Types.ObjectId, ref: 'comandos' },
});

SDispositivo.virtual('ultimoComando', {
    foreignField: '_id',
    justOne: true,
    localField: 'idUltimoComando',
    ref: 'comandos',
});
