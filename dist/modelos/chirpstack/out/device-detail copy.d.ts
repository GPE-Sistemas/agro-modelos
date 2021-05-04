import joi from 'joi';
import { commonLocation } from './gateway';
export declare const IDeviceDetailChirpstackDTOValidation: joi.ObjectSchema<IDeviceDetailChirpstackDTO>;
export declare const IDeviceDetailChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface apiDevice {
    applicationID: string;
    description: string;
    devEUI: string;
    deviceProfileID: string;
    isDisabled: boolean;
    name: string;
    referenceAltitude: number;
    skipFCntCheck: boolean;
    tags: Record<string, any>;
    variables: Record<string, any>;
}
export interface IDeviceDetailChirpstackDTO {
    device: apiDevice;
    deviceStatusBattery: number;
    deviceStatusMargin: number;
    lastSeenAt: string;
    location: commonLocation;
}
//# sourceMappingURL=device-detail copy.d.ts.map