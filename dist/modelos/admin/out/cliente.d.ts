import joi from 'joi';
export declare const IClienteDTOValidation: joi.ObjectSchema<IClienteDTO>;
export declare const IClienteDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IClienteDTO {
    _id: string;
    nombre: string;
    idApplicationServer: string;
    networkServerId: string;
    organizationId: string;
    serviceProfileId: string;
    applications: {
        applicationId: string;
        applicationName: string;
    }[];
    gateways: {
        gatewayId: string;
        gateway: string;
    }[];
}
//# sourceMappingURL=cliente.d.ts.map