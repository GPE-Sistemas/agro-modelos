import { Document, Schema, Types } from 'mongoose';
export interface IEspecieDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
}
export declare const SEspecie: Schema<IEspecieDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=especie.d.ts.map