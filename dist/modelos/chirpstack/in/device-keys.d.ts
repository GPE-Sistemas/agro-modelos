import joi from 'joi';
export declare const IDeviceKeysChirpstackValidation: joi.ObjectSchema<IDeviceKeysChirpstack>;
export declare const IDeviceKeysChirpstackSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDeviceKeysChirpstack {
    deviceKeys: {
        appKey: string;
        devEUI: string;
        genAppKey?: string;
        nwkKey: string;
    };
}
//# sourceMappingURL=device-keys.d.ts.map