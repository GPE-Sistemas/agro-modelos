import { Document, Schema, Types } from 'mongoose';
export interface IReporteTrackerSilobolsaDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    idSilobolsa?: string;
    fecha: Date;
    alarma: boolean;
}
export declare const SReporteTrackerSilobolsa: Schema<IReporteTrackerSilobolsaDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=reporte.d.ts.map