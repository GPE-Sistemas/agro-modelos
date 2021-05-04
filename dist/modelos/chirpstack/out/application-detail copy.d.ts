import joi from 'joi';
export declare const IApplicationDetailChirpstackDTOValidation: joi.ObjectSchema<IApplicationDetailChirpstackDTO>;
export declare const IApplicationDetailChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface apiApplication {
    description: string;
    id: string;
    name: string;
    organizationID: string;
    payloadCodec: string;
    payloadDecoderScript: string;
    payloadEncoderScript: string;
    serviceProfileID: string;
}
export interface IApplicationDetailChirpstackDTO {
    application: apiApplication;
}
//# sourceMappingURL=application-detail copy.d.ts.map