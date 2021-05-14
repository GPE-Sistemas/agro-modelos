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
}
exports.SharedParserService = SharedParserService;
