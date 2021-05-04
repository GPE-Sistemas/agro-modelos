import joi from 'joi';
export declare const IGatewayStatsChirpstackDTOValidation: joi.ObjectSchema<IGatewayStatsChirpstackDTO>;
export declare const IGatewayStatsChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface apiGatewayStats {
    rxPacketsReceived: number;
    rxPacketsReceivedOK: number;
    timestamp: string;
    txPacketsEmitted: number;
    txPacketsReceived: number;
}
export interface IGatewayStatsChirpstackDTO {
    result: apiGatewayStats[];
}
//# sourceMappingURL=gateway-stats.d.ts.map