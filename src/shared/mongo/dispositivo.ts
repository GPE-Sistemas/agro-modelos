import { Schema, Types, Document } from 'mongoose';
import { IMetadatos } from '../metadatos';

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
});
