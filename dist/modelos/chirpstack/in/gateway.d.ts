import joi from 'joi';
export declare const IGatewayChirpstackValidation: joi.ObjectSchema<IGatewayChirpstack>;
export declare const IGatewayChirpstackSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IGatewayChirpstack {
    gateway: {
        boards?: {
            fineTimestampKey: string;
            fpgaID: string;
        }[];
        description: string;
        discoveryEnabled?: boolean;
        gatewayProfileID?: string;
        id: string;
        location?: {
            accuracy: number;
            altitude: number;
            latitude: number;
            longitude: number;
            source: 'UNKNOWN' | 'GPS' | 'CONFIG' | 'GEO_RESOLVER_TDOA' | 'GEO_RESOLVER_RSSI' | 'GEO_RESOLVER_GNSS' | 'GEO_RESOLVER_WIFI';
        };
        metadata: Record<string, string>;
        name: string;
        networkServerID: string;
        organizationID: string;
        tags?: Record<string, string>;
    };
}
//# sourceMappingURL=gateway.d.ts.map