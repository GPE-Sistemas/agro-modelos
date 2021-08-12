import joi from 'joi';
export declare const IVacunacionValidation: joi.ObjectSchema<IVacunacion>;
export declare const IVacunacionSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IVacunacion {
    idAnimal?: string;
    idTipoVacuna?: string;
    idEstablecimiento?: string;
    fecha?: string;
    dosis?: string;
    producto?: string;
    observaciones?: string;
}
//# sourceMappingURL=vacunacion.d.ts.map