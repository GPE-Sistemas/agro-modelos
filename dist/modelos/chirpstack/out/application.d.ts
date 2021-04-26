import joi from 'joi';
export declare const IApplicationChirpstackDTOValidation: joi.ObjectSchema<IApplicationChirpstackDTO>;
export declare const IApplicationChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
interface apiApplicationListItem {
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
export {};
//# sourceMappingURL=application.d.ts.map