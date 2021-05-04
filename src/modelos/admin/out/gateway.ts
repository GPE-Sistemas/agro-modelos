import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IApplicationServerDTO, IApplicationServerDTOValidation } from './application-server';

export const IGatewayDTOValidation = joi.object<IGatewayDTO>({
    _id: joi.string(),
    idApplicationServer: joi.string(),
    name: joi.string(),
    gatewayId: joi.string(),
    description: joi.string(),
    organizationId: joi.string(),
    networkServerId: joi.string(),
    coordenadas: ICoordenadasValidation,
    gpsDiferencial: joi.boolean(),
    //
    applicationServer: IApplicationServerDTOValidation,
});

export const IGatewayDTOSwagger = j2s(IGatewayDTOValidation).swagger;

export interface IGatewayDTO {
    _id: string;
    idApplicationServer: string;
    name: string;
    gatewayId: string;
    description: string;
    organizationId: string;
    networkServerId: string;
    coordenadas: ICoordenadas;
    gpsDiferencial: boolean;
    //
    applicationServer?: IApplicationServerDTO;
}
