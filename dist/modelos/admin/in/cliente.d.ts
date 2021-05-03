import joi from 'joi';
export declare const IClienteValidation: joi.ObjectSchema<ICliente>;
export declare const IClienteSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ICliente {
    admin: boolean;
    activo: boolean;
    nombre: string;
    idApplicationServer?: string;
    networkServerId?: string;
    organizationId?: string;
    serviceProfileId?: string;
    applications?: {
        applicationId: string;
        applicationName: string;
    }[];
    deviceProfiles?: {
        deviceProfileId: string;
        deviceProfile: string;
    }[];
    gateways?: {
        gatewayId: string;
        gateway: string;
    }[];
}
//# sourceMappingURL=cliente.d.ts.map