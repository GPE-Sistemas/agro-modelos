import { Schema, Document } from 'mongoose';

export interface IPedidoReporteDb extends Document {
    numeroSerie: string;
    timestamp: Date;
    fechaCreacion: Date;
    aplicado: boolean;
}

export const SPedidoReporte = new Schema<IPedidoReporteDb>({
    timestamp: { type: Date, required: true, },
    fechaCreacion: { type: Date, required: true, },
    numeroSerie: { type: String, required: true, ref: 'correctoras' },
    aplicado: { type: Boolean },
});

SPedidoReporte.index({ 'timestamp': 1, 'numeroSerie': 1 }, { unique: true });

SPedidoReporte.virtual('correctora', {
    foreignField: 'numeroSerie',
    justOne: true,
    localField: 'numeroSerie',
    ref: 'correctoras',
});
