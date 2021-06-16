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
    cliente?: IClienteDb;
}
export declare const SUsuario: Schema<IUsuarioDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=usuario.d.ts.map