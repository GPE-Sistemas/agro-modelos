import { Document, Schema } from 'mongoose';
export interface ICorrectoraDb extends Document {
    numeroSerie?: string;
    deveui: string;
    modelo: string;
    fechaAsignacion: Date;
    firmware: string;
    bateria: number;
}
export declare const SCorrectora: Schema<ICorrectoraDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=correctora.d.ts.map