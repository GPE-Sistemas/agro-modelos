import joi from 'joi';
export declare const IBajaValidation: joi.ObjectSchema<IBaja>;
export declare const IBajaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IBaja {
    fecha: string;
    idTipoBaja: string;
    idAnimal: string;
    observaciones: string;
}
//# sourceMappingURL=baja.d.ts.map