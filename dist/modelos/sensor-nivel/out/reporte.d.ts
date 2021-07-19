import joi from 'joi';
export declare const IReporteSensorNivelDTOValidation: joi.ObjectSchema<IReporteSensorNivelDTO>;
export declare const IReporteSensorNivelDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IReporteSensorNivelDTO {
    _id: string;
    deveui: string;
    fecha: string;
    distancia: number;
}
//# sourceMappingURL=reporte.d.ts.map