import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IClientDTOValidation = joi.object<IClientDTO>({
    id: joi.string(),
    grants: joi.array().items(joi.string()),
    redirectUris: joi.array().items(joi.string()),
});

export const IClientDTOSwagger = j2s(IClientDTOValidation).swagger;

export interface IClientDTO {
    id: string;
    redirectUris?: string | string[];
    grants: string | string[];
}
