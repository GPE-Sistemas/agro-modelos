import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IAplicacionDTO, IAplicacionDTOValidation } from './aplicacion';
import { IApplicationServerDTO, IApplicationServerDTOValidation } from './application-server';

export const IClienteDTOValidation = joi.object<IClienteDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    admin: joi.boolean(),
    activo: joi.boolean(),
    idApplicationServer: joi.string(),
    idAplicaciones: joi.array().items(joi.string()),
    networkServerId: joi.string(),
    organizationId: joi.string(),
    serviceProfileId: joi.string(),
    gatewayIds: joi.array().items(joi.string()),
    //
    applicationServer: IApplicationServerDTOValidation,
    aplicaciones: IAplicacionDTOValidation,
});

export const IClienteDTOSwagger = j2s(IClienteDTOValidation).swagger;

export interface IClienteDTO {
    _id: string;
    admin: boolean;
    activo: boolean;
    nombre: string;
    idApplicationServer: string;
    idAplicaciones: string[];
    networkServerId: string;
    organizationId: string;
    serviceProfileId: string;
    gatewayIds?: string[];
    //
    applicationServer?: IApplicationServerDTO;
    aplicaciones?: IAplicacionDTO[];
}
