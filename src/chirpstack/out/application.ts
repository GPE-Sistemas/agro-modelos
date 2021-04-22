import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IApplicationDTOValidation = joi.object<IApplicationDTO>({
    result: joi.object({
        description: joi.string(),
        id: joi.string(),
        name: joi.string(),
        organizationID: joi.string(),
        serviceProfileID: joi.string(),
        serviceProfileName: joi.string(),
    }),
    totalCount: joi.string(),
});

export const IApplicationDTOSwagger = j2s(IApplicationDTOValidation).swagger;

interface apiApplicationListItem {
    description: string;
    id: string;
    name: string;
    organizationID: string;
    serviceProfileID: string;
    serviceProfileName: string;
}

export interface IApplicationDTO {
    result: apiApplicationListItem[];
    totalCount: string;
}
