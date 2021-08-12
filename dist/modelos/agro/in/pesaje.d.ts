import joi from 'joi';
export declare const IPesajeValidation: joi.ObjectSchema<IPesaje>;
export declare const IPesajeSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IPesaje {
    idAnimal?: string;
    idEstablecimiento?: string;
    fecha?: string;
    peso?: number;
    observaciones?: string;
}
//# sourceMappingURL=pesaje.d.ts.map