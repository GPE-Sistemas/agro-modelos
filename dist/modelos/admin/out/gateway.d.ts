import joi from 'joi';
import { IApplicationServerDTO } from './application-server';
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
    applicationServer?: IApplicationServerDTO;
}
//# sourceMappingURL=gateway.d.ts.map