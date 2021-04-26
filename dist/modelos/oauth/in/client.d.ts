import joi from 'joi';
export declare const IClientValidation: joi.ObjectSchema<IClient>;
export declare const IClientSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IClient {
    clientId: string;
    clientSecret: string;
    grants: string[];
    redirectUris: string[];
}
//# sourceMappingURL=client.d.ts.map