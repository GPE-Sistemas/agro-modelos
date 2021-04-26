import joi from 'joi';
export declare const INetworkServerChirpstackDTOValidation: joi.ObjectSchema<INetworkServerChirpstackDTO>;
export declare const INetworkServerChirpstackDTOSwagger: import("joi-to-swagger").SwaggerSchema;
interface apiListNetworkServerResponse {
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
export {};
//# sourceMappingURL=network-server.d.ts.map