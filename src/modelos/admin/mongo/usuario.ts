import { Document, Schema, Types } from 'mongoose';
import { IAplicacionDb } from './aplicacion';
import { IClienteDb } from './cliente';

export interface IUsuarioDb extends Document {
    _id: Types.ObjectId;
    activo: boolean;
    usuario: string;
    clave: string;
    rol: string;
    idCliente: Types.ObjectId;
    idAplicaciones: Types.ObjectId[];
    nombre: string;
    apellido: string;
    notificacionesActivas?: boolean;
    notificaciones?: {
        telegram?: string[];
        whatsapp?: string[];
        email?: string[];
        sms?: string[];
    };
    telegramChatId?: string;
    email?: string;
    telefono?: string;
    //
    cliente?: IClienteDb;
    aplicaciones: IAplicacionDb[];
}

export const SUsuario = new Schema<IUsuarioDb>({
    activo: { type: Boolean },
    usuario: { type: String, required: true, unique: true },
    clave: { type: String, required: true },
    rol: { type: String },
    idCliente: { type: Types.ObjectId, required: true, ref: 'clientes' },
    idAplicaciones: [{ type: Types.ObjectId, ref: 'aplicaciones' }],
    nombre: { type: String },
    apellido: { type: String },
    notificacionesActivas: { type: Boolean },
    notificaciones: {
        telegram: [{ type: String }],
        whatsapp: [{ type: String }],
        email: [{ type: String }],
        sms: [{ type: String }],
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

SUsuario.virtual('aplicaciones', {
    foreignField: '_id',
    justOne: false,
    localField: 'idAplicaciones',
    ref: 'aplicaciones',
});
