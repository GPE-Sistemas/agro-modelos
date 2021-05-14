import { Document, Schema, Types } from 'mongoose';
export interface ICorrectoraDb extends Document {
    numeroSerie?: string;
    deveui: string;
    modelo: string;
    fechaAsignacion: Date;
    firmware: string;
    idUltimoReporte: Types.ObjectId;
    bateria: number;
}
export declare const SCorrectora: Schema<ICorrectoraDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=correctora.d.ts.map