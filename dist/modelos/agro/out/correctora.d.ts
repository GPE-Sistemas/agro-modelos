import joi from 'joi';
import { IReporteCorrectoraDTO } from '../../correctoras';
export declare const ICorrectoraDTOValidation: joi.ObjectSchema<ICorrectoraDTO>;
export declare const ICorrectoraDTOSchema: import("joi-to-swagger").SwaggerSchema;
export interface ICorrectoraDTO {
    _id: string;
    numeroSerie?: string;
    deveui?: string;
    modelo?: string;
    fechaAsignacion: string;
    firmware?: string;
    bateria: number;
    idUltimoReporte?: string;
    ultimoReporte?: IReporteCorrectoraDTO;
}
//# sourceMappingURL=correctora.d.ts.map