import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';

export const IGatewayValidation = joi.object<IGateway>({
    idApplicationServer: joi.string(),
    name: joi.string(),
    gatewayId: joi.string(),
    description: joi.string(),
    organizationId: joi.string(),
    networkServerId: joi.string(),
    coordenadas: ICoordenadasValidation,
    gpsDiferencial: joi.boolean(),
});

export const IGatewaySwagger = j2s(IGatewayValidation).swagger;

export interface IGateway {
    idApplicationServer: string;
    name: string;
    gatewayId: string;
    description: string;
    organizationId: string;
    networkServerId: string;
    coordenadas: ICoordenadas;
    gpsDiferencial: boolean;
}
