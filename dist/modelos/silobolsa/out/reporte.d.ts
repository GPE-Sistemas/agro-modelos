import joi from 'joi';
export declare const IReporteSilobolsaDTOValidation: joi.ObjectSchema<IReporteSilobolsaDTO>;
export declare const IReporteSilobolsaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IReporteSilobolsaDTO {
    _id: string;
    deveui: string;
    idSilobolsa?: string;
    fecha: string;
    co2: number;
    temperatura: number;
    humedad: number;
    bateria: number;
    bateriaPorc: number;
    co2Porc: number;
    humedadPorc: number;
    temperaturaGrados: number;
    humedadEquilibrio?: number;
    alertaBateria?: number;
    alertaCo2?: number;
    alertaHumedad?: number;
}
//# sourceMappingURL=reporte.d.ts.map