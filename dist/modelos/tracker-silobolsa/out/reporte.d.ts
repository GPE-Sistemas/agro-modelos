import joi from 'joi';
export declare const IReporteTrackerSilobolsaDTOValidation: joi.ObjectSchema<IReporteTrackerSilobolsaDTO>;
export declare const IReporteTrackerSilobolsaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IReporteTrackerSilobolsaDTO {
    _id: string;
    deveui: string;
    idSilobolsa?: string;
    fecha: string;
    alarma: boolean;
}
//# sourceMappingURL=reporte.d.ts.map