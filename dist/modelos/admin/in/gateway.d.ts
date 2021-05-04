import joi from 'joi';
import { ICoordenadas } from '../../shared';
export declare const IGatewayValidation: joi.ObjectSchema<IGateway>;
export declare const IGatewaySwagger: import("joi-to-swagger").SwaggerSchema;
export interface IGateway {
    idApplicationServer: string;
    name: string;
    gatewayId: string;
    description: string;
    organizationId: string;
    networkServerId: string;
    coordenadas: ICoordenadas;
    gpsDiferencial: boolean;
}
//# sourceMappingURL=gateway.d.ts.map