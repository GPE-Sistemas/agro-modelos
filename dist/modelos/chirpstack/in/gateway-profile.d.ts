import joi from 'joi';
export declare const IGatewayProfileChirpstackValidation: joi.ObjectSchema<IGatewayProfileChirpstack>;
export declare const IGatewayProfileChirpstackSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IGatewayProfileChirpstack {
    gatewayProfile: {
        channels: number[];
        extraChannels?: {
            bandwidth: number;
            bitrate: number;
            frequency: number;
            modulation: 'LORA' | 'FSK';
            spreadingFactors: number[];
        }[];
        id: string;
        name: string;
        networkServerID: string;
        statsInterval: string;
    };
}
//# sourceMappingURL=gateway-profile.d.ts.map