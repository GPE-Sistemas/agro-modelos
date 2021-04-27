import { Document, Schema, Types } from 'mongoose';

export interface IAlertaDb extends Document {
    _id: Types.ObjectId;
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
    mensajeCorto?: string
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
        fecha: Date;
        usuario: string;
        comentario: string;
    }[];
    fecha: Date;
    estadoActual?: string;
    estados?: {
        fecha: Date;
        usuario: string;
        estado: string;
    }[];
}

export const SAlerta = new Schema<IAlertaDb>({
    aplicacion: { type: String },
    nivel: { type: Number },
    mensaje: { type: String },
    mensajeCorto: { type: String },
    valor: { type: String },
    deveui: { type: String },
    deviceName: { type: String },
    idAsignado: { type: String },
    nombreAsignado: { type: String },
    archivada: { type: Boolean },
    comentarios: [{
        fecha: { type: Date },
        usuario: { type: String },
        comentario: { type: String },
    }],
    fecha: { type: Date },
    estadoActual: { type: String },
    estados: {
        fecha: { type: Date },
        usuario: { type: String },
        estado: { type: String },
    }
});
