import { Document, Schema, Types } from 'mongoose';
export interface ITipoTratamientoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
}
export declare const STipoTratamiento: Schema<ITipoTratamientoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=tipoTratamiento.d.ts.map