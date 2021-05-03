import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IGatewayDTOValidation = joi.object<IGatewayDTO>({
    _id: joi.string(),
    idApplicationServer: joi.string(),
    name: joi.string(),
    gategayId: joi.string(),
    description: joi.string(),
    organizationId: joi.string(),
    networkServerId: joi.string(),
});

export const IGatewayDTOSwagger = j2s(IGatewayDTOValidation).swagger;

export interface IGatewayDTO {
    _id: string;
    idApplicationServer: string;
    name: string;
    gategayId: string;
    description: string;
    organizationId: string;
    networkServerId: string;
}