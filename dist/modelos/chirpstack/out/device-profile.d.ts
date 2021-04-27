import joi from 'joi';
export declare const IDeviceProfileChirpstackDTOValidation: joi.ObjectSchema<IDeviceProfileChirpstackDTO>;
export declare const IDeviceProfileChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface apiDeviceProfileListItem {
    createdAt: string;
    id: string;
    name: string;
    networkServerID: string;
    networkServerName: string;
    organizationID: string;
    updatedAt: string;
}
export interface IDeviceProfileChirpstackDTO {
    result: apiDeviceProfileListItem[];
    totalCount: string;
}
//# sourceMappingURL=device-profile.d.ts.map