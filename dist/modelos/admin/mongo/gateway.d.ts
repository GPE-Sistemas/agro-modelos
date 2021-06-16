import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IApplicationServerDb } from './application-server';
export interface IGatewayDb extends Document {
    _id: Types.ObjectId;
    idApplicationServer: string;
    name: string;
    gatewayId: string;
    description: string;
    organizationId: string;
    networkServerId: string;
    coordenadas: ICoordenadas;
    gpsDiferencial: boolean;
    applicationServer: IApplicationServerDb;
}
export declare const SGateway: Schema<IGatewayDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=gateway.d.ts.map