import joi from 'joi';
export declare const IReporteCorrectoraValidation: joi.ObjectSchema<IReporteCorrectora>;
export declare const IReporteCorrectoraSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IReporteCorrectora {
    deveui: string;
    numeroSerie: string;
    fecha: string;
    corrected?: number;
    uncorrected?: number;
    presion?: number;
    temperatura?: number;
}
//# sourceMappingURL=reporte.d.ts.map