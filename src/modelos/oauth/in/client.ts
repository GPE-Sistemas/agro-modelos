import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IClientValidation = joi.object<IClient>({
    clientId: joi.string(),
    clientSecret: joi.string(),
    grants: joi.array().items(joi.string()),
    redirectUris: joi.array().items(joi.string()),
});

export const IClientSwagger = j2s(IClientValidation).swagger;

export interface IClient {
    clientId: string;
    clientSecret: string;
    grants: string[];
    redirectUris: string[]
}
