import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IDeviceProfileDTOValidation = joi.object<IDeviceProfileDTO>({
    result: joi.object({
        createdAt: joi.string(),
        id: joi.string(),
        name: joi.string(),
        networkServerID: joi.string(),
        networkServerName: joi.string(),
        organizationID: joi.string(),
        updatedAt: joi.string(),
    }),
    totalCount: joi.string(),
});

export const IDeviceProfileDTOSwagger = j2s(IDeviceProfileDTOValidation).swagger;

interface apiDeviceProfileListItem {
    createdAt: string;
    id: string;
    name: string;
    networkServerID: string;
    networkServerName: string;
    organizationID: string;
    updatedAt: string;
}

export interface IDeviceProfileDTO {
    result: apiDeviceProfileListItem[];
    totalCount: string;
}
