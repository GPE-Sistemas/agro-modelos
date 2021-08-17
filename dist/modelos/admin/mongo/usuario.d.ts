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
    cliente?: IClienteDb;
    aplicaciones: IAplicacionDb[];
}
export declare const SUsuario: Schema<IUsuarioDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=usuario.d.ts.map