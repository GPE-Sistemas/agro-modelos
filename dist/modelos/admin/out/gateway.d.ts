import joi from 'joi';
export declare const IGatewayDTOValidation: joi.ObjectSchema<IGatewayDTO>;
export declare const IGatewayDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IGatewayDTO {
    _id: string;
    idApplicationServer: string;
    name: string;
    gategayId: string;
    description: string;
    organizationId: string;
    networkServerId: string;
}
//# sourceMappingURL=gateway.d.ts.map