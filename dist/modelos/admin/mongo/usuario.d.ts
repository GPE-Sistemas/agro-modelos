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
    cliente?: IClienteDb;
}
export declare const SUsuario: Schema<IUsuarioDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=usuario.d.ts.map