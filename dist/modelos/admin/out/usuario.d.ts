import joi from 'joi';
export declare const IUsuarioDTOValidation: joi.ObjectSchema<IUsuarioDTO>;
export declare const IUsuarioDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IUsuarioDTO {
    _id: string;
    usuario: string;
    idCliente: string;
    nombre: string;
    apellido: string;
}
//# sourceMappingURL=usuario.d.ts.map