import { Document, Schema, Types } from 'mongoose';

export interface IUsuarioDb extends Document {
    _id: Types.ObjectId;
    usuario: string;
    clave: string;
    idCliente: Types.ObjectId;
    nombre: string;
    apellido: string;
}

export const SUsuario = new Schema<IUsuarioDb>({
    usuario: { type: String, required: true, unique: true },
    clave: { type: String, required: true },
    idCliente: { type: Types.ObjectId, required: true, ref: 'clientes' },
    nombre: { type: String },
    apellido: { type: String },
});
