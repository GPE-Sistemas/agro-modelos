import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IClienteValidation = joi.object<ICliente>({
    nombre: joi.string().required(),
    applicationServerId: joi.string(),
    networkServerId: joi.string(),
    organizationId: joi.string(),
    serviceProfileId: joi.string(),
    // applications: joi.array().items(joi.object({
    //     applicationId: joi.string(),
    //     applicationName: joi.string(),
    // })),
    // deviceProfiles: joi.array().items(joi.object({
    //     deviceProfileId: joi.string(),
    //     deviceProfile: joi.string(),
    // })),
    // gateways: joi.array().items(joi.object({
    //     gatewayId: joi.string(),
    //     gateway: joi.string(),
    // })),
});

export const IClienteSwagger = j2s(IClienteValidation).swagger;

export interface ICliente {
    nombre: string;
    applicationServerId?: string;
    networkServerId?: string;
    organizationId?: string;
    serviceProfileId?: string;
    applications?: { applicationId: string, applicationName: string }[];
    deviceProfiles?: { deviceProfileId: string, deviceProfile: string }[];
    gateways?: { gatewayId: string, gateway: string }[];
    // gatewayProfileId: string; // Se puede consultar con networkServerId
}