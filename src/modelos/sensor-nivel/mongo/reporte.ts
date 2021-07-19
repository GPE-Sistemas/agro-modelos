import { Document, Schema, Types } from 'mongoose';

export interface IReporteSensorNivelDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    fecha: Date;
    distancia: number;
}

export const SReporteSensorNivel = new Schema<IReporteSensorNivelDb>({
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    fecha: { type: Date, required: true },
    distancia: { type: Number },
});

SReporteSensorNivel.index({ deveui: 1, fecha: 1 });

SReporteSensorNivel.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
