import { Document, Schema, Types } from 'mongoose';
export interface ITipoBajaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
}
export declare const STipoBaja: Schema<ITipoBajaDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=tipoBaja.d.ts.map