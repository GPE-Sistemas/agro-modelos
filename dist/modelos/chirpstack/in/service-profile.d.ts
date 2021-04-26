import joi from 'joi';
export declare const IServiceProfileChirpstackValidation: joi.ObjectSchema<IServiceProfileChirpstack>;
export declare const IServiceProfileChirpstackSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IServiceProfileChirpstack {
    serviceProfile: {
        addGWMetaData?: boolean;
        channelMask?: string;
        devStatusReqFreq?: number;
        dlBucketSize?: number;
        dlRate?: number;
        dlRatePolicy?: 'DROP' | 'MARK';
        drMax: number;
        drMin: number;
        hrAllowed?: boolean;
        id?: string;
        minGWDiversity?: number;
        name: string;
        networkServerID: string;
        nwkGeoLoc?: boolean;
        organizationID: string;
        prAllowed?: boolean;
        raAllowed?: boolean;
        reportDevStatusBattery?: boolean;
        reportDevStatusMargin?: boolean;
        targetPER?: number;
        ulBucketSize?: number;
        ulRate?: number;
        ulRatePolicy?: 'DROP' | 'MARK';
    };
}
//# sourceMappingURL=service-profile.d.ts.map