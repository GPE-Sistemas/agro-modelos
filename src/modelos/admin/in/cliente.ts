import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IClienteValidation = joi.object<ICliente>({
    nombre: joi.string().required(),
    idAplicaciones: joi.array().items(joi.string()),
    idApplicationServer: joi.string().allow(null),
    networkServerId: joi.string().allow(''),
    organizationId: joi.string().allow(''),
    serviceProfileId: joi.string().allow(''),
    gatewayIds: joi.array().items(joi.string()),
});

export const IClienteSwagger = j2s(IClienteValidation).swagger;

export interface ICliente {
    admin?: boolean;
    activo?: boolean;
    nombre: string;
    idApplicationServer?: string;
    idAplicaciones?: string[];
    networkServerId?: string;
    organizationId?: string;
    serviceProfileId?: string;
    gatewayIds?: string[];
}
