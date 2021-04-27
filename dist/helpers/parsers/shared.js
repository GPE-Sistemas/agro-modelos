"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedParserService = void 0;
class SharedParserService {
    static estado(dato) {
        const dto = {
            fecha: dato.fecha.toISOString(),
            usuario: dato.usuario,
            estado: dato.estado,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static estados(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.estado(dato));
        }
        return dto;
    }
    static comentario(dato) {
        const dto = {
            fecha: dato.fecha.toISOString(),
            usuario: dato.usuario,
            comentario: dato.comentario,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static comentarios(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.comentario(dato));
        }
        return dto;
    }
    static alerta(dato) {
        const dto = {
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
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static alertas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.alerta(dato));
        }
        return dto;
    }
    static logDispositivo(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            contenido: dato.contenido,
            deveui: dato.deveui,
            evento: dato.evento,
            fecha: dato.fecha.toISOString(),
            payload: dato.payload,
            puerto: dato.puerto,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static logsDispositivos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.logDispositivo(dato));
        }
        return dto;
    }
}
exports.SharedParserService = SharedParserService;
