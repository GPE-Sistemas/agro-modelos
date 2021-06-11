import joi from 'joi';
export declare const IReporteTrackerSilobolsaValidation: joi.ObjectSchema<IReporteTrackerSilobolsa>;
export declare const IReporteTrackerSilobolsaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IReporteTrackerSilobolsa {
    deveui: string;
    idSilobolsa?: string;
    fecha: string;
    alarma: boolean;
}
//# sourceMappingURL=reporte.d.ts.map