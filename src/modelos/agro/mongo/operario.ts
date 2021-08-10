import { Document, Schema, Types } from 'mongoose';
import { IPermiso } from '../in/permisos';

export interface IOperarioDb extends Document {
    _id: Types.ObjectId;
    idUsuario: Types.ObjectId;
    permisos: IPermiso;
}

export const SOperario = new Schema<IOperarioDb>({
    idUsuario: { type: Types.ObjectId, required: true },
    permisos: { type: Object },
});
