import joi from 'joi';
export declare const IDeviceProfileChirpstackValidation: joi.ObjectSchema<IDeviceProfileChirpstack>;
export declare const IDeviceProfileChirpstackSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDeviceProfileChirpstack {
    deviceProfile: {
        classBTimeout?: number;
        classCTimeout?: number;
        factoryPresetFreqs: number[];
        geolocBufferTTL?: number;
        geolocMinBufferSize?: number;
        id?: string;
        macVersion: string;
        maxDutyCycle?: number;
        maxEIRP: number;
        name: string;
        networkServerID: string;
        organizationID: string;
        payloadCodec?: string;
        payloadDecoderScript?: string;
        payloadEncoderScript?: string;
        pingSlotDR?: number;
        pingSlotFreq?: number;
        pingSlotPeriod?: number;
        regParamsRevision: string;
        rfRegion?: string;
        rxDROffset1: number;
        rxDataRate2: number;
        rxDelay1: number;
        rxFreq2: number;
        supports32BitFCnt?: boolean;
        supportsClassB?: boolean;
        supportsClassC?: boolean;
        supportsJoin?: boolean;
        tags?: Record<string, string>;
        uplinkInterval: string;
    };
}
//# sourceMappingURL=device-profile.d.ts.map