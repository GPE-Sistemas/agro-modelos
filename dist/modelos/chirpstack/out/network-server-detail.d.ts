import joi from 'joi';
export declare const INetworkServerDetailChirpstackDTOValidation: joi.ObjectSchema<INetworkServerDetailChirpstackDTO>;
export declare const INetworkServerDetailChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface apiNetworkServer {
    caCert: string;
    gatewayDiscoveryDR: number;
    gatewayDiscoveryEnabled: boolean;
    gatewayDiscoveryInterval: number;
    gatewayDiscoveryTXFrequency: number;
    id: string;
    name: string;
    routingProfileCACert: string;
    routingProfileTLSCert: string;
    routingProfileTLSKey: string;
    server: string;
    tlsCert: string;
    tlsKey: string;
}
export interface INetworkServerDetailChirpstackDTO {
    createdAt: string;
    networkServer: apiNetworkServer;
    region: string;
    updatedAt: string;
    version: string;
}
//# sourceMappingURL=network-server-detail.d.ts.map