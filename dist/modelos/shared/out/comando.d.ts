import joi from 'joi';
export declare const IComandoDTOValidation: joi.ObjectSchema<IComandoDTO>;
export declare const IComandoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IComandoDTO {
    _id: string;
    deveui: string;
    payload: string;
    puerto: number;
    ejecutado: boolean;
    error: boolean;
    timestamp: string;
    usuario: {
        _id: string;
        email: string;
    };
    fCnt: string;
    estado: string;
    comando: string;
}
//# sourceMappingURL=comando.d.ts.map