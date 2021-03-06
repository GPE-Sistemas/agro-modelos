import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IServiceProfileChirpstackValidation = joi.object<IServiceProfileChirpstack>({
    serviceProfile: joi.object({
        addGWMetaData: joi.boolean(),
        channelMask: joi.string(),
        devStatusReqFreq: joi.number(),
        dlBucketSize: joi.number(),
        dlRate: joi.number(),
        dlRatePolicy: joi.string().valid('DROP', 'MARK'),
        drMax: joi.number(),
        drMin: joi.number(),
        hrAllowed: joi.boolean(),
        id: joi.string(),
        minGWDiversity: joi.number(),
        name: joi.string(),
        networkServerID: joi.string(),
        nwkGeoLoc: joi.boolean(),
        organizationID: joi.string(),
        prAllowed: joi.boolean(),
        raAllowed: joi.boolean(),
        reportDevStatusBattery: joi.boolean(),
        reportDevStatusMargin: joi.boolean(),
        targetPER: joi.number(),
        ulBucketSize: joi.number(),
        ulRate: joi.number(),
        ulRatePolicy: joi.string().valid('DROP', 'MARK'),
    }),
});

export const IServiceProfileChirpstackSwagger = j2s(IServiceProfileChirpstackValidation).swagger;

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
    }
}
