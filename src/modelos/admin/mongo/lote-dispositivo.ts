import { Document, Schema, Types } from 'mongoose';

export interface ILoteDispositivoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    key: string;
}

export const SLoteDispositivo = new Schema<ILoteDispositivoDb>({
    nombre: { type: String, required: true, unique: true },
    key: { type: String, required: true },
});
