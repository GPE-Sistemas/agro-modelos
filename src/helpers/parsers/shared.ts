import { LeanDocument } from 'mongoose';
import { IAlertaDb, IAlertaDTO, ILogDispositivoDb, ILogDispositivoDTO } from '../../modelos';

export class SharedParserService {

    static estado(dato: {fecha: Date, usuario: string, estado: string}) {
        const dto = {
            fecha: dato.fecha.toISOString(),
            usuario: dato.usuario,
            estado: dato.estado,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static estados(datos: {fecha: Date, usuario: string, estado: string}[]) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.estado(dato));
        }
        return dto;
    }

    static comentario(dato: {fecha: Date, usuario: string, comentario: string}) {
        const dto = {
            fecha: dato.fecha.toISOString(),
            usuario: dato.usuario,
            comentario: dato.comentario,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static comentarios(datos: {fecha: Date, usuario: string, comentario: string}[]) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.comentario(dato));
        }
        return dto;
    }

    static alerta(dato: LeanDocument<IAlertaDb>): IAlertaDTO {
        const dto: IAlertaDTO = {
            _id: dato._id.toHexString(),
            aplicacion: dato.aplicacion,
            deveui: dato.deveui,
            deviceName: dato.deviceName,
            estadoActual: dato.estadoActual,
            fecha: dato.fecha.toISOString(),
            mensaje: dato.mensaje,
            mensajeCorto: dato.mensajeCorto,
            nivel: dato.nivel,
            archivada: dato.archivada,
            comentarios: dato.comentarios ? SharedParserService.comentarios(dato.comentarios) : undefined,
            estados: dato.estados ? SharedParserService.estados(dato.estados) : undefined,
            idAsignado: dato.idAsignado,
            nombreAsignado: dato.nombreAsignado,
            valor: dato.valor,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static alertas(datos: LeanDocument<IAlertaDb>[]): IAlertaDTO[] {
        const dto: IAlertaDTO[] = [];
        for (const dato of datos) {
            dto.push(this.alerta(dato));
        }
        return dto;
    }

    static logDispositivo(dato: LeanDocument<ILogDispositivoDb>): ILogDispositivoDTO {
        const dto: ILogDispositivoDTO = {
            _id: dato._id.toHexString(),
            contenido: dato.contenido,
            deveui: dato.deveui,
            evento: dato.evento,
            fecha: dato.fecha.toISOString(),
            payload: dato.payload,
            puerto: dato.puerto,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static logsDispositivos(datos: LeanDocument<ILogDispositivoDb>[]): ILogDispositivoDTO[] {
        const dto: ILogDispositivoDTO[] = [];
        for (const dato of datos) {
            dto.push(this.logDispositivo(dato));
        }
        return dto;
    }

}
