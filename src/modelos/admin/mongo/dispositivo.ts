import { Document, Schema, Types } from 'mongoose';
import { IApplicationServerDb } from './application-server';
import { IClienteDb } from './cliente';
import { ILoteDispositivoDb } from './lote-dispositivo';

export interface IDispositivoAdminDb extends Document {
    _id: Types.ObjectId;
    idApplicationServer: Types.ObjectId;
    deveui: string;
    deviceName: string;
    descripcion: string;
    tipo: string;
    idLote: Types.ObjectId;
    idCliente: Types.ObjectId;
    deviceProfileId: string;
    //
    applicationServer?: IApplicationServerDb;
    lote?: ILoteDispositivoDb;
    cliente?: IClienteDb;
}

export const SDispositivoAdmin = new Schema<IDispositivoAdminDb>({
    idApplicationServer: { type: Types.ObjectId, ref: 'applicationServers' },
    deveui: { type: String, required: true, unique: true },
    deviceName: { type: String, required: true, unique: true },
    descripcion: { type: String },
    tipo: { type: String, required: true },
    idLote: { type: Types.ObjectId, required: true, ref: 'lotes' },
    idCliente: { type: Types.ObjectId, ref: 'clientes' },
    deviceProfileId: { type: String },
});

SDispositivoAdmin.virtual('applicationServer', {
    foreignField: '_id',
    justOne: true,
    localField: 'idApplicationServer',
    ref: 'applicationServers',
});

SDispositivoAdmin.virtual('lote', {
    foreignField: '_id',
    justOne: true,
    localField: 'idLote',
    ref: 'lotes',
});

SDispositivoAdmin.virtual('cliente', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCliente',
    ref: 'clientes',
});
