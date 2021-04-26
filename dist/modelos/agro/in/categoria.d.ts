import joi from 'joi';
export declare const ICategoriaValidation: joi.ObjectSchema<ICategoria>;
export declare const ICategoriaSchema: import("joi-to-swagger").SwaggerSchema;
export interface ICategoria {
    nombre: string;
    idEspecie: string;
    sexo?: boolean;
    edadMinMeses?: number;
    edadMaxMeses?: number;
}
//# sourceMappingURL=categoria.d.ts.map