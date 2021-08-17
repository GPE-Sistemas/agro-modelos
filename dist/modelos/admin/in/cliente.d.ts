import joi from 'joi';
export declare const IClienteValidation: joi.ObjectSchema<ICliente>;
export declare const IClienteSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ICliente {
    admin?: boolean;
    activo?: boolean;
    nombre: string;
    idApplicationServer?: string;
    idAplicaciones?: string[];
    networkServerId?: string;
    organizationId?: string;
    serviceProfileId?: string;
    gatewayIds?: string[];
}
//# sourceMappingURL=cliente.d.ts.map