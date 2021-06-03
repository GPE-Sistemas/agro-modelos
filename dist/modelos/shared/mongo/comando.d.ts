import { Document, Schema, Types } from 'mongoose';
export interface IComandoDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    deviceName: string;
    idAsignado: string;
    nombreAsignado: string;
    ejecutado: boolean;
    error: boolean;
    fCnt: string;
    payload: string;
    puerto: number;
    fecha: Date;
    usuario: {
        _id?: string;
        usuario: string;
    };
    descripcion: string;
    aplicacion: string;
}
export declare const SComando: Schema<IComandoDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=comando.d.ts.map