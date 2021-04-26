import { Document, Schema, Types } from 'mongoose';
export interface IComandoDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    ejecutado: boolean;
    error: boolean;
    fCnt: string;
    payload: string;
    puerto: number;
    timestamp: Date;
    usuario: {
        _id: string;
        email: string;
    };
}
export declare const SComando: Schema<IComandoDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=comando.d.ts.map