import joi from 'joi';
export declare const IClientDTOValidation: joi.ObjectSchema<IClientDTO>;
export declare const IClientDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IClientDTO {
    id: string;
    redirectUris?: string | string[];
    grants: string | string[];
}
//# sourceMappingURL=client.d.ts.map