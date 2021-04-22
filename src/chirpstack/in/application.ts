import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IApplicationValidation = joi.object<IApplication>({
    application: joi.object({
        description: joi.string(),
        id: joi.string(),
        name: joi.string(),
        organizationID: joi.string(),
        payloadCodec: joi.string(),
        payloadDecoderScript: joi.string(),
        payloadEncoderScript: joi.string(),
        serviceProfileID: joi.string(),
    }),
});

export const IApplicationSwagger = j2s(IApplicationValidation).swagger;

export interface IApplication {
    application: {
        description: string,
        id: string,
        name: string,
        organizationID: string,
        payloadCodec: string,
        payloadDecoderScript: string,
        payloadEncoderScript: string,
        serviceProfileID: string
    }
}
