import { Document, Schema, Types } from 'mongoose';

export interface IDispositivoAdminDb extends Document {
    _id: Types.ObjectId;
    applicationServerId: Types.ObjectId;
    deviceName: string;
    deveui: string;
    tipo: string;
    idLote: Types.ObjectId;
    idCliente: Types.ObjectId;
    deviceProfileId: string;
}

export const SDispositivoAdmin = new Schema<IDispositivoAdminDb>({
    applicationServerId: { type: Types.ObjectId, ref: 'applicationServers' },
    deveui: { type: String, required: true, unique: true },
    deviceName: { type: String, required: true, unique: true },
    tipo: { type: String, required: true },
    idLote: { type: Types.ObjectId, required: true, ref: 'lotes' },
    idCliente: { type: Types.ObjectId, required: true, ref: 'clientes' },
    deviceProfileId: { type: String },
});
