import { Document, Schema, Types } from 'mongoose';
export interface IDiagnosticoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
}
export declare const SDiagnostico: Schema<IDiagnosticoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=diagnostico.d.ts.map