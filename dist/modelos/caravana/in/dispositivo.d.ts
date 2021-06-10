import joi from 'joi';
import { IDispositivo } from '../../shared/in/dispositivo';
import { IAcelerometro } from '../acelerometro';
export declare const IDispositivoCaravanaValidation: joi.ObjectSchema<IDispositivoCaravana>;
export declare const IDispositivoCaravanaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoCaravana extends IDispositivo {
    acelerometro?: IAcelerometro;
    fechaAsignacion?: string;
    frecuenciaReporte?: string;
    idAnimal?: string;
    idUltimoReporte?: string;
}
//# sourceMappingURL=dispositivo.d.ts.map