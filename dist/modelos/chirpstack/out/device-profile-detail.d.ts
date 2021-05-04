import joi from 'joi';
export declare const IDeviceProfileDetailChirpstackDTOValidation: joi.ObjectSchema<IDeviceProfileDetailChirpstackDTO>;
export declare const IDeviceProfileDetailChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface apiDeviceProfile {
    classBTimeout: number;
    classCTimeout: number;
    factoryPresetFreqs: number[];
    geolocBufferTTL: number;
    geolocMinBufferSize: number;
    id: string;
    macVersion: string;
    maxDutyCycle: number;
    maxEIRP: number;
    name: string;
    networkServerID: string;
    organizationID: string;
    payloadCodec: string;
    payloadDecoderScript: string;
    payloadEncoderScript: string;
    pingSlotDR: number;
    pingSlotFreq: number;
    pingSlotPeriod: number;
    regParamsRevision: string;
    rfRegion: string;
    rxDROffset1: number;
    rxDataRate2: number;
    rxDelay1: number;
    rxFreq2: number;
    supports32BitFCnt: boolean;
    supportsClassB: boolean;
    supportsClassC: boolean;
    supportsJoin: boolean;
    tags: Record<string, any>;
    uplinkInterval: string;
}
export interface IDeviceProfileDetailChirpstackDTO {
    createdAt: string;
    deviceProfile: apiDeviceProfile;
    updatedAt: string;
}
//# sourceMappingURL=device-profile-detail.d.ts.map