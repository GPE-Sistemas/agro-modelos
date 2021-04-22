import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IDeviceProfileChirpstackDTOValidation = joi.object<IDeviceProfileChirpstackDTO>({
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

export const IDeviceProfileChirpstackDTOSwagger = j2s(IDeviceProfileChirpstackDTOValidation).swagger;

interface apiDeviceProfileChirpstackListItem {
    createdAt: string;
    id: string;
    name: string;
    networkServerID: string;
    networkServerName: string;
    organizationID: string;
    updatedAt: string;
}

export interface IDeviceProfileChirpstackDTO {
    result: apiDeviceProfileChirpstackListItem[];
    totalCount: string;
}
