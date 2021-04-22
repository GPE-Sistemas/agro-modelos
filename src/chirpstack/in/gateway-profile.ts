import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IGatewayProfileValidation = joi.object<IGatewayProfile>({
    gatewayProfile: joi.object({
        channels: joi.array().items(joi.number()),
        extraChannels: joi.array().items(joi.object({
            bandwidth: joi.number(),
            bitrate: joi.number(),
            frequency: joi.number(),
            modulation: joi.string().valid('LORA', 'FSK'),
            spreadingFactors: joi.array().items(joi.number()),
        })),
        id: joi.string(),
        name: joi.string(),
        networkServerID: joi.string(),
        statsInterval: joi.string(),
    }),
});

export const IGatewayProfileSwagger = j2s(IGatewayProfileValidation).swagger;

export interface IGatewayProfile {
    gatewayProfile: {
        channels: number[],
        extraChannels: {
            bandwidth: number,
            bitrate: number,
            frequency: number,
            modulation: 'LORA' | 'FSK',
            spreadingFactors: number[],
        }[],
        id: string,
        name: string,
        networkServerID: string,
        statsInterval: string,
    }
}
