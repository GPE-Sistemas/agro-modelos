import joi from 'joi';
export declare const IGatewayValidation: joi.ObjectSchema<IGateway>;
export declare const IGatewaySwagger: import("joi-to-swagger").SwaggerSchema;
export interface IGateway {
    idApplicationServer: string;
    name: string;
    gategayId: string;
    description: string;
    organizationId: string;
    networkServerId: string;
}
//# sourceMappingURL=gateway.d.ts.map