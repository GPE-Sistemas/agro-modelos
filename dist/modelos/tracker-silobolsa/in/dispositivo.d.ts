import joi from 'joi';
import { IDispositivo } from '../../shared/in/dispositivo';
export declare const IDispositivoTrackerSilobolsaValidation: joi.ObjectSchema<IDispositivoTrackerSilobolsa>;
export declare const IDispositivoTrackerSilobolsaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoTrackerSilobolsa extends IDispositivo {
    fechaAsignacion?: string;
    idUltimoReporte?: string;
    idSilobolsa?: string;
    posicion?: number;
    firmware?: string;
    sensibilidad?: number;
}
//# sourceMappingURL=dispositivo.d.ts.map