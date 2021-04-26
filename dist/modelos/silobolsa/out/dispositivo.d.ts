import joi from 'joi';
import { IDispositivoDTO } from '../../shared/out/dispositivo';
import { IReporteSilobolsaDTO } from './reporte';
export declare const IDispositivoSilobolsaDTOValidation: joi.ObjectSchema<IDispositivoSilobolsaDTO>;
export declare const IDispositivoSilobolsaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoSilobolsaDTO extends IDispositivoDTO {
    alarmaActiva: boolean;
    fechaAsignacion: string;
    idUltimoReporte: string;
    idSilobolsa: string;
    posicion: number;
    ultimoReporte?: IReporteSilobolsaDTO;
}
//# sourceMappingURL=dispositivo.d.ts.map