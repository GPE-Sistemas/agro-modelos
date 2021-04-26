import joi from 'joi';
export declare const IUsuarioValidation: joi.ObjectSchema<IUsuario>;
export declare const IUsuarioSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IUsuario {
    usuario: string;
    clave: string;
    idCliente: string;
    nombre: string;
    apellido: string;
}
//# sourceMappingURL=usuario.d.ts.map