import joi from 'joi';
import { IDispositivoCaravanaDTO } from './dispositivo';
export declare const IAlertaCaravanaDTOValidation: joi.ObjectSchema<IAlertaCaravanaDTO>;
export declare const IAlertaCaravanaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAlertaCaravanaDTO {
    _id: string;
    codigo: number;
    fecha: string;
    deveui: string;
    idAsignado?: string;
    dispositivo?: IDispositivoCaravanaDTO;
    descripcion: string;
}
//# sourceMappingURL=alerta.d.ts.map