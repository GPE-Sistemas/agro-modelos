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
    // Calculados
    bateriaPorc: number;
    co2Porc: number;
    humedadPorc: number;
    temperaturaGrados: number;
    humedadEquilibrio?: number;
}

export const SReporteSilobolsa = new Schema<IReporteSilobolsaDb>({
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    idSilobolsa: { type: String },
    fecha: { type: Date, required: true },
    co2: { type: Number },
    temperatura: { type: Number },
    humedad: { type: Number },
    bateria: { type: Number },
    // Calculados
    bateriaPorc: { type: Number },
    co2Porc: { type: Number },
    humedadPorc: { type: Number },
    temperaturaGrados: { type: Number },
    humedadEquilibrio: { type: Number },
});

SReporteSilobolsa.index({ deveui: 1, fecha: 1 });
SReporteSilobolsa.index({ idSilobolsa: 1, fecha: 1 }, { sparse: true });
SReporteSilobolsa.index({ idSilobolsa: 1, deveui: 1, fecha: 1 }, { sparse: true });

SReporteSilobolsa.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
