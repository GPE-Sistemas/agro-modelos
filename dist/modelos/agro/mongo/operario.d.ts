import { Document, Schema, Types } from 'mongoose';
import { IPermiso } from '../in/permisos';
export interface IOperarioDb extends Document {
    _id: Types.ObjectId;
    idUsuario: Types.ObjectId;
    permisos: IPermiso;
}
export declare const SOperario: Schema<IOperarioDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=operario.d.ts.map