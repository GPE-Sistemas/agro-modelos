import joi from 'joi';
export declare const IReporteSilobolsaValidation: joi.ObjectSchema<IReporteSilobolsa>;
export declare const IReporteSilobolsaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IReporteSilobolsa {
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