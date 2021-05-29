import { Document, Schema, Types } from 'mongoose';
export interface IReporteSilobolsaDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    idSilobolsa?: string;
    fecha: Date;
    co2: number;
    temperatura: number;
    humedad: number;
    bateria: number;
    bateriaPorc: number;
    co2Porc: number;
    humedadPorc: number;
    temperaturaGrados: number;
    humedadEquilibrio?: number;
    alertaBateria?: number;
    alertaCo2?: number;
    alertaHumedad?: number;
}
export declare const SReporteSilobolsa: Schema<IReporteSilobolsaDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=reporte.d.ts.map