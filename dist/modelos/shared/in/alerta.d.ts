import joi from 'joi';
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
    /** Indica el tipo de alerta
     * @example
     * 'Temperatura elevada'
     * 'CO2 elevado'
     * 'Fuera del corral'
     * */
    mensaje: string;
    /** Nombre corto de la alerta
     * @example
     * 'TEMP'
     * 'CO2'
     * 'FC'
     */
    mensajeCorto?: string;
    /** Valor que genero la alerta
     * @example
     * '38 °C'
     * '30 %'
     * '{lat: -35.16516, lng: 55.2112}'
    */
    valor?: string;
    deveui: string;
    deviceName?: string;
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
    estadoActual?: string;
    estados?: {
        fecha: string;
        usuario: string;
        estado: string;
    }[];
}
//# sourceMappingURL=alerta.d.ts.map