import { Document, Schema, Types } from 'mongoose';
export interface IUsuarioDb extends Document {
    _id: Types.ObjectId;
    usuario: string;
    clave: string;
    idCliente: Types.ObjectId;
    nombre: string;
    apellido: string;
}
export declare const SUsuario: Schema<IUsuarioDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=usuario.d.ts.map