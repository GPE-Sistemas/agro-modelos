import joi from 'joi';
export declare const IDeviceChirpstackValidation: joi.ObjectSchema<IDeviceChirpstack>;
export declare const IDeviceChirpstackSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDeviceChirpstack {
    device: {
        applicationID: string;
        description: string;
        devEUI: string;
        deviceProfileID: string;
        isDisabled?: boolean;
        name: string;
        referenceAltitude?: number;
        skipFCntCheck?: boolean;
        tags?: Record<string, string>;
        variables?: Record<string, string>;
    };
}
//# sourceMappingURL=device.d.ts.map