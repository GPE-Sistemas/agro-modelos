import joi from 'joi';
import { IAplicacionDTO } from './aplicacion';
import { IApplicationServerDTO } from './application-server';
export declare const IClienteDTOValidation: joi.ObjectSchema<IClienteDTO>;
export declare const IClienteDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IClienteDTO {
    _id: string;
    admin: boolean;
    activo: boolean;
    nombre: string;
    idApplicationServer: string;
    idAplicaciones: string[];
    networkServerId: string;
    organizationId: string;
    serviceProfileId: string;
    gatewayIds?: string[];
    applicationServer?: IApplicationServerDTO;
    aplicaciones?: IAplicacionDTO[];
}
//# sourceMappingURL=cliente.d.ts.map