import joi from 'joi';
import { commonLocation } from './gateway';
export declare const IGatewayDetailChirpstackDTOValidation: joi.ObjectSchema<IGatewayDetailChirpstackDTO>;
export declare const IGatewayDetailChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface apiGatewayBoard {
    fineTimestampKey: string;
    fpgaID: string;
}
export interface apiGateway {
    boards: apiGatewayBoard[];
    description: string;
    discoveryEnabled: boolean;
    gatewayProfileID: string;
    id: string;
    location: commonLocation;
    metadata: Record<string, any>;
    name: string;
    networkServerID: string;
    organizationID: string;
    tags: Record<string, any>;
}
export interface IGatewayDetailChirpstackDTO {
    createdAt: string;
    firstSeenAt: string;
    gateway: apiGateway;
    lastSeenAt: string;
    updatedAt: string;
}
//# sourceMappingURL=gateway-detail.d.ts.map