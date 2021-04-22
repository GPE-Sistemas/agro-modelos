import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IClienteDTOValidation = joi.object<IClienteDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    networkServerId: joi.string(),
    organizationId: joi.string(),
    applications: joi.array().items(joi.object({
        applicationId: joi.string(),
        applicationName: joi.string(),
    })),
    deviceProfiles: joi.array().items(joi.object({
        deviceProfileId: joi.string(),
        deviceProfile: joi.string(),
    })),
    gateways: joi.array().items(joi.object({
        gatewayId: joi.string(),
        gateway: joi.string(),
    })),
});

export const IClienteDTOSwagger = j2s(IClienteDTOValidation).swagger;

export interface IClienteDTO {
    _id: string;
    nombre: string;
    networkServerId: string;
    organizationId: string;
    applications: { applicationId: string, applicationName: string }[];
    deviceProfiles: { deviceProfileId: string, deviceProfile: string }[];
    gateways: { gatewayId: string, gateway: string }[];
}
