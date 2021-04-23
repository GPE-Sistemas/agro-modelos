import { Document, Schema, Types } from 'mongoose';

export interface ITipoTratamientoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
}
export const STipoTratamiento = new Schema<ITipoTratamientoDb>({
    nombre: { type: String, required: true, unique: true },
});
