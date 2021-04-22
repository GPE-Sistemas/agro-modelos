import { Document, Schema, Types } from 'mongoose';

export interface IApplicationServerDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    url: string;
    tipo: string;
    config: { [key: string]: string };
}

export const SApplicationServer = new Schema<IApplicationServerDb>({
    nombre: { type: String, required: true, unique: true },
    url: { type: String, required: true },
    tipo: { type: String, required: true },
    config: { type: Object },
});
