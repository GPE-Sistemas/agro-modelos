import joi from 'joi';
import { IDispositivoSilobolsaDTO } from './dispositivo';
export declare const IAlertaSilobolsaDTOValidation: joi.ObjectSchema<IAlertaSilobolsaDTO>;
export declare const IAlertaSilobolsaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAlertaSilobolsaDTO {
    _id: string;
    /** Indica el tipo de alerta // 1 - bateria // 2 - co2 // 3 - humedad*/
    codigo: number;
    /** nivel // 1 - leve // 2 - grave */
    nivel: number;
    /** nivel de bateria o valor del sensor de alerta */
    valor?: number;
    fecha: string;
    deveui?: string;
    idSilobolsa?: string;
    archivada: boolean;
    dispositivo?: IDispositivoSilobolsaDTO;
    descripcion: string;
}
//# sourceMappingURL=alerta.d.ts.map