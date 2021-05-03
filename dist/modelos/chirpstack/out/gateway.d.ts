import joi from 'joi';
export declare const IGatewayChirpstackDTOValidation: joi.ObjectSchema<IGatewayChirpstackDTO>;
export declare const IGatewayChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface commonLocation {
    accuracy: number;
    altitude: number;
    latitude: number;
    longitude: number;
    source: 'UNKNOWN' | 'GPS' | 'CONFIG' | 'GEO_RESOLVER_TDOA' | 'GEO_RESOLVER_RSSI' | 'GEO_RESOLVER_GNSS' | 'GEO_RESOLVER_WIFI';
}
export interface apiGatewayListItem {
    createdAt: string;
    description: string;
    firstSeenAt: string;
    id: string;
    lastSeenAt: string;
    location: commonLocation;
    name: string;
    networkServerID: string;
    networkServerName: string;
    organizationID: string;
    updatedAt: string;
}
export interface IGatewayChirpstackDTO {
    result: apiGatewayListItem[];
    totalCount: string;
}
//# sourceMappingURL=gateway.d.ts.map