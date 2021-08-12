import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IEstadoAlertaValidation = joi.object<IEstadoAlerta>({
    fecha: joi.string(),
    usuario: joi.string(),
    estado: joi.string(),
});

export const IReporteAlertaValidation = joi.object<IReporteAlerta>({
    deveui: joi.string(),
    deviceName: joi.string(),
    fecha: joi.string(),
    medicion: joi.string(),
    valor: joi.number(),
});

export const IComentarioAlertaValidation = joi.object<IComentarioAlerta>({
    fecha: joi.string(),
    usuario: joi.string(),
    comentario: joi.string(),
});

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

export const IAlertaValidation = joi.object<IAlerta>({
    aplicacion: joi.string(),
    nivel: joi.number(),
    idAsignado: joi.string(),
    nombreAsignado: joi.string(),
    tipo: joi.string().valid('tecnica', 'seguridad', 'reporte'),
    fecha: joi.date(),
    estadoActual: joi.string(),
    archivada: joi.boolean(),
    comentarios: IComentarioAlertaValidation,
    estados: IEstadoAlertaValidation,
    reportes: IReporteAlertaValidation,
    idEstablecimiento: joi.string(),
});

export const IAlertaSwagger = j2s(IAlertaValidation).swagger;



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
