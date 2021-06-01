import { Schema, Document } from 'mongoose';

export interface IPedidoReporteDb extends Document {
    numeroSerie: string;
    fecha: Date;
    fechaCreacion: Date;
    aplicado: boolean;
}

export const SPedidoReporte = new Schema<IPedidoReporteDb>({
    fecha: { type: Date, required: true, },
    fechaCreacion: { type: Date, required: true, },
    numeroSerie: { type: String, required: true, ref: 'correctoras' },
    aplicado: { type: Boolean },
});

SPedidoReporte.index({ fecha: 1 });
SPedidoReporte.index({ numeroSerie: 1, fecha: 1 }, { unique: true });
SPedidoReporte.index({ aplicado: 1, numeroSerie: 1, fecha: 1 });

SPedidoReporte.virtual('correctora', {
    foreignField: 'numeroSerie',
    justOne: true,
    localField: 'numeroSerie',
    ref: 'correctoras',
});
