import joi from 'joi';
export declare const IReporteCorrectoraDTOValidation: joi.ObjectSchema<IReporteCorrectoraDTO>;
export declare const IReporteCorrectoraDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IReporteCorrectoraDTO {
    _id: string;
    deveui: string;
    numeroSerie: string;
    fecha: string;
    corrected?: number;
    uncorrected?: number;
    presion?: number;
    temperatura?: number;
}
//# sourceMappingURL=reporte.d.ts.map