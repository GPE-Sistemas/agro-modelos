import joi from 'joi';
export declare const INetworkServerChirpstackValidation: joi.ObjectSchema<INetworkServerChirpstack>;
export declare const INetworkServerChirpstackSwagger: import("joi-to-swagger").SwaggerSchema;
export interface INetworkServerChirpstack {
    networkServer: {
        caCert?: string;
        gatewayDiscoveryDR?: number;
        gatewayDiscoveryEnabled?: boolean;
        gatewayDiscoveryInterval?: number;
        gatewayDiscoveryTXFrequency?: number;
        id?: string;
        name: string;
        routingProfileCACert?: string;
        routingProfileTLSCert?: string;
        routingProfileTLSKey?: string;
        server: string;
        tlsCert?: string;
        tlsKey?: string;
    };
}
//# sourceMappingURL=network-server.d.ts.map