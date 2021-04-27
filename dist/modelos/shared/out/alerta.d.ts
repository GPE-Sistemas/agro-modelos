import joi from 'joi';
export declare const IAlertaDTOValidation: joi.ObjectSchema<IAlertaDTO>;
export declare const IAlertaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAlertaDTO {
    _id: string;
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
//# sourceMappingURL=alerta.d.ts.map