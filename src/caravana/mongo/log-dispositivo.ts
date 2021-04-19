import { Document, Schema, Types } from 'mongoose';

export interface ILogDispositivoDb extends Document {
    _id: Types.ObjectId;
    fecha: Date;
    deveui: string;
    puerto: number;
    payload: string;
    evento: string;
    contenido: string;
}

export const SLog = new Schema<ILogDispositivoDb>({
    fecha: { type: Date },
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    puerto: { type: Number },
    payload: { type: String },
    evento: { type: String },
    contenido: { type: String },
});
