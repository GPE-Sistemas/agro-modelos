import joi from 'joi';
export declare const IEstadoAlertaValidation: joi.ObjectSchema<IEstadoAlerta>;
export declare const IReporteAlertaValidation: joi.ObjectSchema<IReporteAlerta>;
export declare const IComentarioAlertaValidation: joi.ObjectSchema<IComentarioAlerta>;
export interface IComentarioAlerta {
    fecha: string;
    usuario: string;
    comentario: string;
}
export interface IEstadoAlerta {
    fecha: string;
    usuario: string;
    estado: string;
}
export interface IReporteAlerta {
    deveui: string;
    deviceName: string;
    fecha: string;
    medicion?: string;
    valor?: number;
}
export declare const IAlertaValidation: joi.ObjectSchema<IAlerta>;
export declare const IAlertaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAlerta {
    /**
     * Api que generó la alerta
     * @example
     * 'silobolsa'
     * 'caravana'
     */
    aplicacion?: string;
    /** nivel de gravedad de la alerta <br>
     * @example
     * 1 - leve
     * 2 - media
     * 3 - grave
     * */
    nivel?: number;
    /** ID al que está asignado el dispositivo que originó la alerta */
    idAsignado?: string;
    /** Nombre para mostrar de la entidad asignada
     * @example
     * 'Silobolsa 001'
     * 'Animal JC 0111 232'
     */
    nombreAsignado?: string;
    tipo?: 'tecnica' | 'seguridad' | 'reporte';
    fecha?: string;
    estadoActual?: string;
    archivada?: boolean;
    comentarios?: IComentarioAlerta[];
    estados?: IEstadoAlerta[];
    reportes?: IReporteAlerta[];
    idEstablecimiento?: string;
}
//# sourceMappingURL=alerta.d.ts.map