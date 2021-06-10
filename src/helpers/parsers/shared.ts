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
            dto.push(SharedParserService.estado(dato));
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
            dto.push(SharedParserService.comentario(dato));
        }
        return dto;
    }

}
