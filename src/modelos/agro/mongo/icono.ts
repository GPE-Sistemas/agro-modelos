import { Document, Schema } from 'mongoose';

export interface IIconoDb extends Document {
    nombre: string;
    strokeColor: string;
    fillColor: string;
}

export const SIcono = new Schema<IIconoDb>({
    nombre: { type: String, required: true, unique: true },
    strokeColor: { type: String },
    fillColor: { type: String },
});
