import { Document, Schema, Types } from 'mongoose';

export interface IReporteCorrectoraDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    numeroSerieCorrectora: string;
    fecha: Date;
    corrected?: number;
    uncorrected?: number;
    presion?: number;
    temperatura?: number;
}

export const SReporteCorrectora = new Schema<IReporteCorrectoraDb>({
    fecha: { type: Date, required: true },
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    numeroSerieCorrectora: { type: String },
    corrected: { type: Number },
    uncorrected: { type: Number },
    presion: { type: Number },
    temperatura: { type: Number },
});

SReporteCorrectora.index({ deveui: 1, fecha: 1 });
SReporteCorrectora.index({ numeroSerieCorrectora: 1, fecha: 1 }, { sparse: true });
SReporteCorrectora.index({ numeroSerieCorrectora: 1, deveui: 1, fecha: 1 }, { sparse: true });

SReporteCorrectora.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});

SReporteCorrectora.virtual('correctora', {
    foreignField: 'numeroSerie',
    justOne: true,
    localField: 'numeroSerieCorrectora',
    ref: 'correctoras',
});
