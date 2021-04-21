import { Document, Schema, Types } from 'mongoose';

export interface IEspecieDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
}

export const SEspecie = new Schema<IEspecieDb>({
    nombre: { type: String, required: true, unique: true },
});
