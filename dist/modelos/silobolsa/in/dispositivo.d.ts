import joi from 'joi';
import { IDispositivo } from '../../shared/in/dispositivo';
export declare const IDispositivoSilobolsaValidation: joi.ObjectSchema<IDispositivoSilobolsa>;
export declare const IDispositivoSilobolsaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoSilobolsa extends IDispositivo {
    alarmaActiva: boolean;
    fechaAsignacion: string;
    idUltimoReporte: string;
    idSilobolsa: string;
    posicion: number;
    alerta?: number;
}
//# sourceMappingURL=dispositivo.d.ts.map