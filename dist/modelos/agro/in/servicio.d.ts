import joi from 'joi';
export declare const IServicioValidation: joi.ObjectSchema<IServicio>;
export declare const IServicioSchema: import("joi-to-swagger").SwaggerSchema;
export interface IServicio {
    idAnimal: string;
    fecha: string;
    inicio: boolean;
    observaciones: string;
}
//# sourceMappingURL=servicio.d.ts.map