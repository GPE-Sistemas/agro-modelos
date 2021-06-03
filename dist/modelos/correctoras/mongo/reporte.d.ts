import { Document, Schema, Types } from 'mongoose';
export interface IReporteCorrectoraDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    numeroSerie: string;
    fecha: Date;
    corrected?: number;
    uncorrected?: number;
    presion?: number;
    temperatura?: number;
}
export declare const SReporteCorrectora: Schema<IReporteCorrectoraDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=reporte.d.ts.map