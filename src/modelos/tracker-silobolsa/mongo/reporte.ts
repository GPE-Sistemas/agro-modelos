import { Document, Schema, Types } from 'mongoose';

export interface IReporteTrackerSilobolsaDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    idSilobolsa?: string;
    fecha: Date;
    alarma: boolean;
}

export const SReporteTrackerSilobolsa = new Schema<IReporteTrackerSilobolsaDb>({
    deveui: { type: String, required: true, trim: true, minlength: 16, maxlength: 16 },
    idSilobolsa: { type: String },
    fecha: { type: Date, required: true },
    alarma: { type: Boolean },
});

SReporteTrackerSilobolsa.index({ deveui: 1, fecha: 1 });
SReporteTrackerSilobolsa.index({ idSilobolsa: 1, fecha: 1 }, { sparse: true });
SReporteTrackerSilobolsa.index({ idSilobolsa: 1, deveui: 1, fecha: 1 }, { sparse: true });

SReporteTrackerSilobolsa.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
