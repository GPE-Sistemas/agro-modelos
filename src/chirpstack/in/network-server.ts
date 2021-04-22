import joi from 'joi';
import j2s from 'joi-to-swagger';

export const INetworkServerValidation = joi.object<INetworkServer>({
    networkServer: joi.object({
        caCert: joi.string(),
        gatewayDiscoveryDR: joi.number(),
        gatewayDiscoveryEnabled: joi.boolean(),
        gatewayDiscoveryInterval: joi.number(),
        gatewayDiscoveryTXFrequency: joi.number(),
        id: joi.string(),
        name: joi.string(),
        routingProfileCACert: joi.string(),
        routingProfileTLSCert: joi.string(),
        routingProfileTLSKey: joi.string(),
        server: joi.string(),
        tlsCert: joi.string(),
        tlsKey: joi.string(),
    }),
});

export const INetworkServerSwagger = j2s(INetworkServerValidation).swagger;

export interface INetworkServer {
    networkServer: {
        caCert: string,
        gatewayDiscoveryDR: number,
        gatewayDiscoveryEnabled: boolean,
        gatewayDiscoveryInterval: number,
        gatewayDiscoveryTXFrequency: number,
        id: string,
        name: string,
        routingProfileCACert: string,
        routingProfileTLSCert: string,
        routingProfileTLSKey: string,
        server: string,
        tlsCert: string,
        tlsKey: string,
    }
}