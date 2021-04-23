import { Document, Schema, Types } from 'mongoose';

export interface IDiagnosticoDb extends Document {
    _id: Types.ObjectId
    nombre: string;
}

export const SDiagnostico = new Schema<IDiagnosticoDb>({
    nombre: { type: String, required: true, unique: true },
});
