import { Document, Schema, Types } from 'mongoose';

export interface ILoteDispositivoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
}

export const SLoteDispositivo = new Schema<ILoteDispositivoDb>({
    nombre: { type: String, required: true, unique: true },
});
