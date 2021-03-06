import joi from 'joi';
import { IEstablecimientoDTO } from '../../agro';
import { IComentarioAlerta, IEstadoAlerta, IReporteAlerta } from '../in/alerta';
export declare const IAlertaDTOValidation: joi.ObjectSchema<IAlertaDTO>;
export declare const IAlertaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAlertaDTO {
    _id: string;
    aplicacion: string;
    nivel: number;
    idAsignado: string;
    nombreAsignado: string;
    tipo: 'tecnica' | 'seguridad' | 'reporte';
    fecha: string;
    estadoActual: string;
    archivada: boolean;
    comentarios: IComentarioAlerta[];
    estados: IEstadoAlerta[];
    reportes: IReporteAlerta[];
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDTO;
}
//# sourceMappingURL=alerta.d.ts.map