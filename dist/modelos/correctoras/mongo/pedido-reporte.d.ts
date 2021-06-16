import { Schema, Document } from 'mongoose';
export interface IPedidoReporteDb extends Document {
    numeroSerie: string;
    fecha: Date;
    fechaCreacion: Date;
    aplicado: boolean;
}
export declare const SPedidoReporte: Schema<IPedidoReporteDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=pedido-reporte.d.ts.map