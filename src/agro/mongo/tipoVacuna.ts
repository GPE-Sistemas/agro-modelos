import { Document, Schema, Types } from 'mongoose';

export interface ITipoVacunaDb extends Document {
    _id: Types.ObjectId
    nombre: string;
}

export const STipoVacuna = new Schema<ITipoVacunaDb>({
    nombre: { type: String, required: true, unique: true },
});
