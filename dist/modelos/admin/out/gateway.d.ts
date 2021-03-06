import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { IApplicationServerDTO } from './application-server';
export declare const IGatewayDTOValidation: joi.ObjectSchema<IGatewayDTO>;
export declare const IGatewayDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IGatewayDTO {
    _id: string;
    idApplicationServer: string;
    name: string;
    gatewayId: string;
    description: string;
    organizationId: string;
    networkServerId: string;
    coordenadas: ICoordenadas;
    gpsDiferencial: boolean;
    applicationServer?: IApplicationServerDTO;
}
//# sourceMappingURL=gateway.d.ts.map