import joi from 'joi';
export declare const IComandoDTOValidation: joi.ObjectSchema<IComandoDTO>;
export declare const IComandoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IComandoDTO {
    _id: string;
    deveui: string;
    payload: string;
    puerto: number;
    fecha: string;
    usuario: {
        _id?: string;
        usuario: string;
    };
    fCnt: string;
    descripcion: string;
    aplicacion: string;
    estado: string;
}
//# sourceMappingURL=comando.d.ts.map