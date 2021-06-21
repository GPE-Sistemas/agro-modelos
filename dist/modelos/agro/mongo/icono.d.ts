import { Document, Schema } from 'mongoose';
export interface IIconoDb extends Document {
    nombre: string;
    strokeColor: string;
    fillColor: string;
}
export declare const SIcono: Schema<IIconoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=icono.d.ts.map