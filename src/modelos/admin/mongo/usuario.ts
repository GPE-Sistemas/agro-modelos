import { Document, Schema, Types } from 'mongoose';
import { IClienteDb } from './cliente';

export interface IUsuarioDb extends Document {
    _id: Types.ObjectId;
    activo: boolean;
    usuario: string;
    clave?: string;
    idCliente: Types.ObjectId;
    nombre: string;
    apellido: string;
    notificacionesActivas?: boolean;
    notificaciones?: {
        telegram?: string[];
        whatsapp?: string[];
        email?: string[];
    };
    telegramChatId?: string;
    email?: string;
    telefono?: string;
    //
    cliente?: IClienteDb;
}

export const SUsuario = new Schema<IUsuarioDb>({
    activo: { type: Boolean },
    usuario: { type: String, required: true, unique: true },
    clave: { type: String, required: true },
    idCliente: { type: Types.ObjectId, required: true, ref: 'clientes' },
    nombre: { type: String },
    apellido: { type: String },
    notificacionesActivas: { type: Boolean },
    notificaciones: {
        telegram: [{ type: String }],
        whatsapp: [{ type: String }],
        email: [{ type: String }],
    },
    telegramChatId: { type: String },
    email: { type: String },
    telefono: { type: String },
});

SUsuario.virtual('cliente', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCliente',
    ref: 'clientes',
});
