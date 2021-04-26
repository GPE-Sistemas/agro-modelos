import { Document, Schema, Types } from 'mongoose';
import { IClienteDb } from './cliente';

export interface IUsuarioDb extends Document {
    _id: Types.ObjectId;
    usuario: string;
    clave: string;
    idCliente: Types.ObjectId;
    nombre: string;
    apellido: string;
    notificacionesActivas: boolean;
    notificaciones: {
        telegram: boolean;
        whatsapp: boolean;
        email: boolean;
    };
    email: string;
    telefono: string;
    //
    cliente?: IClienteDb;
}

export const SUsuario = new Schema<IUsuarioDb>({
    usuario: { type: String, required: true, unique: true },
    clave: { type: String, required: true },
    idCliente: { type: Types.ObjectId, required: true, ref: 'clientes' },
    nombre: { type: String },
    apellido: { type: String },
    notificacionesActivas: { type: Boolean },
    notificaciones: {
        telegram: { type: Boolean },
        whatsapp: { type: Boolean },
        email: { type: Boolean },
    },
    email: { type: String },
    telefono: { type: String },
});

SUsuario.virtual('cliente', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCliente',
    ref: 'clientes',
});
