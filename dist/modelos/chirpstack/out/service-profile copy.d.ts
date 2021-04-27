import joi from 'joi';
export declare const IServiceProfileChirpstackDTOValidation: joi.ObjectSchema<IServiceProfileChirpstackDTO>;
export declare const IServiceProfileChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface apiServiceProfileListItem {
    createdAt: string;
    id: string;
    name: string;
    networkServerID: string;
    networkServerName: string;
    organizationID: string;
    updatedAt: string;
}
export interface IServiceProfileChirpstackDTO {
    result: apiServiceProfileListItem[];
    totalCount: string;
}
//# sourceMappingURL=service-profile copy.d.ts.map