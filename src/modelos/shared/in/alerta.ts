import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IAlertaValidation = joi.object<IAlerta>({
    mensaje: joi.number(),
    aplicacion: joi.string(),
    nivel: joi.number(),
    valor: joi.string(),
    deveui: joi.string(),
    deviceName: joi.string(),
    idAsignado: joi.string(),
    nombreAsignado: joi.string(),
    archivada: joi.boolean(),
    comentarios: joi.array().items(joi.object({
        fecha: joi.string(),
        usuario: joi.string(),
        comentario: joi.string(),
    })),
    fecha: joi.date(),
    estadoActual: joi.string(),
    estados: joi.array().items(joi.object({
        fecha: joi.string(),
        usuario: joi.string(),
        estado: joi.string(),
    })),
});

export const IAlertaSwagger = j2s(IAlertaValidation).swagger;

export interface IAlerta {
    /**
     * Api que generó la alerta
     * @example
     * 'silobolsa'
     * 'caravana'
     */
    mensaje: number;
    /** nivel de gravedad de la alerta <br>
     * @example 
     * 1 - leve
     * 2 - media
     * 3 - grave
     * */
    aplicacion: string;
    /** Indica el tipo de alerta 
     * @example
     * 'Temperatura elevada' 
     * 'CO2 elevado'
     * 'Fuera del corral'
     * */
    nivel: number;
    /** Valor que genero la alerta 
     * @example
     * '38 °C'
     * '30 %'
     * '{lat: -35.16516, lng: 55.2112}'
    */
    valor?: string;
    deveui: string;
    deviceName: string;
    /** ID al que está asignado el dispositivo que originó la alerta */
    idAsignado?: string;
    /** Nombre para mostrar de la entidad asignada
     * @example
     * 'Silobolsa 001'
     * 'Animal JC 0111 232'
     */
    nombreAsignado?: string;
    archivada?: boolean;
    comentarios?: {
        fecha: string;
        usuario: string;
        comentario: string;
    }[];
    fecha: string;
    estadoActual: string;
    estados?: {
        fecha: string;
        usuario: string;
        estado: string;
    }[];
}
