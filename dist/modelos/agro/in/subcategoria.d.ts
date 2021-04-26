import joi from 'joi';
export declare const ISubcategoriaValidation: joi.ObjectSchema<ISubcategoria>;
export declare const ISubcategoriaSchema: import("joi-to-swagger").SwaggerSchema;
export interface ISubcategoria {
    nombre: string;
    pesoMin?: number;
    pesoMax?: number;
    idCategoria: string;
}
//# sourceMappingURL=subcategoria.d.ts.map