import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IClienteDTOValidation = joi.object<IClienteDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    idApplicationServer: joi.string(),
    networkServerId: joi.string(),
    organizationId: joi.string(),
    serviceProfileId: joi.string(),
    applications: joi.array().items(joi.object({
        applicationId: joi.string(),
        applicationName: joi.string(),
    })),
    gateways: joi.array().items(joi.object({
        gatewayId: joi.string(),
        gateway: joi.string(),
    })),
    // deviceProfiles: joi.array().items(joi.object({
    //     deviceProfileId: joi.string(),
    //     deviceProfile: joi.string(),
    // })),
});

export const IClienteDTOSwagger = j2s(IClienteDTOValidation).swagger;

export interface IClienteDTO {
    _id: string;
    nombre: string;
    idApplicationServer: string;
    networkServerId: string;
    organizationId: string;
    serviceProfileId: string;
    applications: { applicationId: string, applicationName: string }[];
    gateways: { gatewayId: string, gateway: string }[];
    // deviceProfiles: { deviceProfileId: string, deviceProfile: string }[];
}
