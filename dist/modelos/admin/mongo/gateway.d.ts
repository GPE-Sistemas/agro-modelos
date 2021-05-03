import { Document, Schema, Types } from 'mongoose';
export interface IGatewayDb extends Document {
    _id: Types.ObjectId;
    idApplicationServer: string;
    name: string;
    gategayId: string;
    description: string;
    organizationId: string;
    networkServerId: string;
}
export declare const SGateway: Schema<IGatewayDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=gateway.d.ts.map