import { Document, Schema, Types } from 'mongoose';

export interface IComandoDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    ejecutado: boolean;
    error: boolean;
    fCnt: string;
    payload: string;
    puerto: number;
    timestamp: Date;
    usuario: any;
}

export const SComando = new Schema<IComandoDb>({
    deveui: { type: String, required: true, ref: 'dispositivos' },
    ejecutado: { type: Boolean },
    error: { type: Boolean },
    fCnt: { type: String },
    payload: { type: String },
    puerto: { type: Number },
    timestamp: { type: String },
    usuario: { type: Object },
});
