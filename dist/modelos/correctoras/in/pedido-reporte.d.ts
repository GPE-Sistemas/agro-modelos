import joi from 'joi';
export declare const IPedidoReporteValidation: joi.ObjectSchema<IPedidoReporte>;
export declare const IPedidoReporteSchema: import("joi-to-swagger").SwaggerSchema;
export interface IPedidoReporte {
    numeroSerie: string;
    fecha: string;
    fechaCreacion?: string;
    aplicado?: boolean;
}
//# sourceMappingURL=pedido-reporte.d.ts.map