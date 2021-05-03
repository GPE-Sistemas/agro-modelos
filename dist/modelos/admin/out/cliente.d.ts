import joi from 'joi';
import { IApplicationServerDTO } from './application-server';
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
    applicationServer?: IApplicationServerDTO;
}
//# sourceMappingURL=cliente.d.ts.map