import joi from 'joi';
export declare const IApplicationChirpstackDTOValidation: joi.ObjectSchema<IApplicationChirpstackDTO>;
export declare const IApplicationChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface apiApplicationListItem {
    description: string;
    id: string;
    name: string;
    organizationID: string;
    serviceProfileID: string;
    serviceProfileName: string;
}
export interface IApplicationChirpstackDTO {
    result: apiApplicationListItem[];
    totalCount: string;
}
//# sourceMappingURL=application.d.ts.map