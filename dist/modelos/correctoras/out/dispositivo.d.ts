import joi from 'joi';
import { IDispositivoDTO } from '../../shared/out/dispositivo';
import { IReporteCorrectoraDTO } from './reporte';
export declare const IDispositivoCorrectoraDTOValidation: joi.ObjectSchema<IDispositivoCorrectoraDTO>;
export declare const IDispositivoCorrectoraDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoCorrectoraDTO extends IDispositivoDTO {
    firmware: string;
    fechaAsignacion: string;
    numeroSerieCorrectora: string;
    idUltimoReporte: string;
    ultimoReporte?: IReporteCorrectoraDTO;
}
//# sourceMappingURL=dispositivo.d.ts.map