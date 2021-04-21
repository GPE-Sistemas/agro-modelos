import { Document, Schema, Types } from 'mongoose';

export interface ITipoBajaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
}

export const STipoBaja = new Schema<ITipoBajaDb>({
    nombre: { type: String, required: true, unique: true },
});
