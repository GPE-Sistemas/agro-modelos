import joi from 'joi';
export declare const INetworkServerChirpstackDTOValidation: joi.ObjectSchema<INetworkServerChirpstackDTO>;
export declare const INetworkServerChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface apiListNetworkServerResponse {
    createdAt: string;
    id: string;
    name: string;
    server: string;
    updatedAt: string;
}
export interface INetworkServerChirpstackDTO {
    result: apiListNetworkServerResponse[];
    totalCount: string;
}
//# sourceMappingURL=network-server.d.ts.map