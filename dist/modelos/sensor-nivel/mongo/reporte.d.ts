import { Document, Schema, Types } from 'mongoose';
export interface IReporteSensorNivelDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    fecha: Date;
    distancia: number;
}
export declare const SReporteSensorNivel: Schema<IReporteSensorNivelDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=reporte.d.ts.map