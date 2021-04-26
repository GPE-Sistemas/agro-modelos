import joi from 'joi';
export declare const IServiceProfileChirpstackDTOValidation: joi.ObjectSchema<IServiceProfileChirpstackDTO>;
export declare const IServiceProfileChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
interface apiServiceProfileListItem {
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
export {};
//# sourceMappingURL=service-profile.d.ts.map