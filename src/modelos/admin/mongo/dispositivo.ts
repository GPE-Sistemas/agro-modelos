import { Document, Schema, Types } from 'mongoose';

export interface IDispositivoAdminDb extends Document {
    _id: Types.ObjectId;
    applicationServerId: string;
    deviceName: string;
    deveui: string;
    tipo: string;
    idLote: Types.ObjectId;
    idCliente: Types.ObjectId;
    applicationId: string;
    deviceProfileId: string;
}

export const SDispositivoAdmin = new Schema<IDispositivoAdminDb>({
    applicationServerId: { type: String },
    deviceName: { type: String, required: true, unique: true },
    deveui: { type: String, required: true, unique: true },
    tipo: { type: String, required: true },
    idLote: { type: String, required: true, ref: 'lotes' },
    idCliente: { type: String, required: true, ref: 'clientes' },
    applicationId: { type: String },
    deviceProfileId: { type: String },
});
