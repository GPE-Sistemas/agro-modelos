import { Document, Schema, Types } from 'mongoose';
export interface ITipoVacunaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
}
export declare const STipoVacuna: Schema<ITipoVacunaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=tipoVacuna.d.ts.map