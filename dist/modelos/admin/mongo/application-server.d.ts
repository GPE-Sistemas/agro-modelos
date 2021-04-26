import { Document, Schema, Types } from 'mongoose';
export interface IApplicationServerDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    url: string;
    tipo: 'Chirpstack' | 'Orbiwise' | 'Actility' | 'WMC';
    config: {
        [key: string]: string;
    };
}
export declare const SApplicationServer: Schema<IApplicationServerDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=application-server.d.ts.map