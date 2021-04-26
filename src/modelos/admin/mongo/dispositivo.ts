import { Document, Schema, Types } from 'mongoose';

export interface IDispositivoAdminDb extends Document {
    _id: Types.ObjectId;
    applicationServerId: Types.ObjectId;
    deviceName: string;
    deveui: string;
    tipo: 'Silobolsa' | 'Caravana';
    idLote: Types.ObjectId;
    idCliente: Types.ObjectId;
    applicationId: string;
    deviceProfileId: string;
}

export const SDispositivoAdmin = new Schema<IDispositivoAdminDb>({
    applicationServerId: { type: Types.ObjectId, ref: 'applicationServers' },
    deviceName: { type: String, required: true, unique: true },
    deveui: { type: String, required: true, unique: true },
    tipo: { type: String, required: true },
    idLote: { type: Types.ObjectId, required: true, ref: 'lotes' },
    idCliente: { type: Types.ObjectId, required: true, ref: 'clientes' },
    applicationId: { type: String },
    deviceProfileId: { type: String },
});
