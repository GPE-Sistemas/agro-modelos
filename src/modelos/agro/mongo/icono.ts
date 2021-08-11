import { Document, Schema } from 'mongoose';

export interface IIconoDb extends Document {
    nombre: string;
    strokeColor: string;
    fillColor: string;
}

export const SIcono = new Schema<IIconoDb>({
    nombre: { type: String },
    strokeColor: { type: String },
    fillColor: { type: String },
});
