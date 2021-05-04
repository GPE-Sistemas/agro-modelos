import joi from 'joi';
export declare const IServiceProfileDetailChirpstackDTOValidation: joi.ObjectSchema<IServiceProfileDetailChirpstackDTO>;
export declare const IServiceProfileDetailChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface apiServiceProfile {
    addGWMetaData: boolean;
    channelMask: string;
    devStatusReqFreq: number;
    dlBucketSize: number;
    dlRate: number;
    dlRatePolicy: 'DROP' | 'MARK';
    drMax: number;
    drMin: number;
    hrAllowed: boolean;
    id: string;
    minGWDiversity: number;
    name: string;
    networkServerID: string;
    nwkGeoLoc: boolean;
    organizationID: string;
    prAllowed: boolean;
    raAllowed: boolean;
    reportDevStatusBattery: boolean;
    reportDevStatusMargin: boolean;
    targetPER: number;
    ulBucketSize: number;
    ulRate: number;
    ulRatePolicy: 'DROP' | 'MARK';
}
export interface IServiceProfileDetailChirpstackDTO {
    createdAt: string;
    serviceProfile: apiServiceProfile;
    updatedAt: string;
}
//# sourceMappingURL=service-profile-detail.d.ts.map