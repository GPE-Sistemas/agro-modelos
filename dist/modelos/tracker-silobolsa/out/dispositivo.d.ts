import joi from 'joi';
import { IDispositivoDTO } from '../../shared/out/dispositivo';
import { IReporteTrackerSilobolsaDTO } from './reporte';
export declare const IDispositivoTrackerSilobolsaDTOValidation: joi.ObjectSchema<IDispositivoTrackerSilobolsaDTO>;
export declare const IDispositivoTrackerSilobolsaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoTrackerSilobolsaDTO extends IDispositivoDTO {
    fechaAsignacion: string;
    idUltimoReporte: string;
    idSilobolsa: string;
    posicion: number;
    firmware: string;
    sensibilidad: number;
    ultimoReporte?: IReporteTrackerSilobolsaDTO;
}
//# sourceMappingURL=dispositivo.d.ts.map