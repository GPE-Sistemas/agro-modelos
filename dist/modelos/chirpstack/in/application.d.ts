import joi from 'joi';
export declare const IApplicationChirpstackValidation: joi.ObjectSchema<IApplicationChirpstack>;
export declare const IApplicationChirpstackSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IApplicationChirpstack {
    application: {
        description: string;
        id?: string;
        name: string;
        organizationID: string;
        payloadCodec?: string;
        payloadDecoderScript?: string;
        payloadEncoderScript?: string;
        serviceProfileID: string;
    };
}
//# sourceMappingURL=application.d.ts.map