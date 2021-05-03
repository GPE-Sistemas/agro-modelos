import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IGatewayChirpstackDTOValidation = joi.object<IGatewayChirpstackDTO>({
    result: joi.object({
        canHaveGateways: joi.boolean(),
        createdAt: joi.string(),
        displayName: joi.string(),
        id: joi.string(),
        name: joi.string(),
        updatedAt: joi.string(),
    }),
    totalCount: joi.string(),
});

export const IGatewayChirpstackDTOSwagger = j2s(IGatewayChirpstackDTOValidation).swagger;

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
