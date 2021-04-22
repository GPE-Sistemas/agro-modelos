import { Document, Schema, Types } from 'mongoose';

export interface IUsuarioDb extends Document {
    _id: Types.ObjectId;
    usuario: string;
    clave: string;
    idCliente: Types.ObjectId;
}

export const SUsuario = new Schema<IUsuarioDb>({
    usuario: { type: String, required: true, unique: true },
    clave: { type: String, required: true },
    idCliente: { type: String, required: true, ref: 'clientes' },
});
