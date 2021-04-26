import joi from 'joi';
export declare const ITratamientoValidation: joi.ObjectSchema<ITratamiento>;
export declare const ITratamientoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ITratamiento {
    idAnimal: string;
    idDiagnostico: string;
    idTipoTratamiento: string;
    fecha: string;
    producto: string;
    observaciones: string;
}
//# sourceMappingURL=tratamiento.d.ts.map