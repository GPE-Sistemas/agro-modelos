import { Schema, Document } from 'mongoose';
export interface IPedidoReporteDb extends Document {
    numeroSerie: string;
    timestamp: Date;
    fechaCreacion: Date;
    aplicado: boolean;
}
export declare const SPedidoReporte: Schema<IPedidoReporteDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=pedidoRegistro.d.ts.map