import joi from 'joi';
export declare const IClienteDTOValidation: joi.ObjectSchema<IClienteDTO>;
export declare const IClienteDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IClienteDTO {
    _id: string;
    admin: boolean;
    activo: boolean;
    nombre: string;
    idApplicationServer: string;
    networkServerId: string;
    organizationId: string;
    serviceProfileId: string;
    gatewayIds?: string[];
}
//# sourceMappingURL=cliente.d.ts.map