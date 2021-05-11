import joi from 'joi';
export declare const IPedidoReporteDTOValidation: joi.ObjectSchema<IPedidoReporteDTO>;
export declare const IPedidoReporteDTOSchema: import("joi-to-swagger").SwaggerSchema;
export interface IPedidoReporteDTO {
    _id: string;
    numeroSerie: string;
    timestamp: string;
    fechaCreacion?: string;
    aplicado?: boolean;
}
//# sourceMappingURL=pedido-reporte.d.ts.map