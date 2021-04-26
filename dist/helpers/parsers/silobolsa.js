"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SilobolsaParserService = void 0;
class SilobolsaParserService {
    static reporte(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            deveui: dato.deveui,
            idSilobolsa: dato.idSilobolsa,
            fecha: dato.fecha.toISOString(),
            bateria: dato.bateria,
            co2: dato.co2,
            humedad: dato.humedad,
            temperatura: dato.temperatura,
            // Calculados
            bateriaPorc: dato.bateriaPorc,
            co2Porc: dato.co2Porc,
            humedadPorc: dato.humedadPorc,
            temperaturaGrados: dato.temperaturaGrados,
            humedadEquilibrio: dato.humedadEquilibrio
        };
        return dto;
    }
    static reportes(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.reporte(dato));
        }
        return dto;
    }
    static dispositivo(dato) {
        var _a, _b, _c;
        const dto = {
            // Base
            _id: dato._id.toHexString(),
            adr: dato.adr,
            deveui: dato.deveui,
            deviceName: dato.deviceName,
            dr: dato.dr,
            fCnt: dato.fCnt,
            fechaUltimoUplink: (_a = dato.fechaUltimoUplink) === null || _a === void 0 ? void 0 : _a.toISOString(),
            metadatos: dato.metadatos,
            red: dato.red,
            // Especificos Silobolsa
            fechaAsignacion: (_b = dato.fechaAsignacion) === null || _b === void 0 ? void 0 : _b.toISOString(),
            idSilobolsa: dato.idSilobolsa,
            idUltimoReporte: (_c = dato.idUltimoReporte) === null || _c === void 0 ? void 0 : _c.toHexString(),
            alarmaActiva: dato.alarmaActiva,
            posicion: dato.posicion,
            // Populate
            ultimoReporte: dato.ultimoReporte ? this.reporte(dato.ultimoReporte) : undefined,
        };
        Object.keys(dto).forEach(key => dto[key] === null ? delete dto[key] : {});
        return dto;
    }
    static dispositivos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.dispositivo(dato));
        }
        return dto;
    }
    static alerta(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            deveui: dato.deveui,
            idSilobolsa: dato.idSilobolsa,
            fecha: dato.fecha.toISOString(),
            codigo: dato.codigo,
            archivada: dato.archivada,
            nivel: dato.nivel,
            valor: dato.valor,
            //
            descripcion: this.getDescripcionAlerta(dato.codigo),
            //
            dispositivo: dato.dispositivo ? this.dispositivo(dato.dispositivo) : undefined,
        };
        Object.keys(dto).forEach(key => dto[key] === null ? delete dto[key] : {});
        return dto;
    }
    static alertas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.alerta(dato));
        }
        return dto;
    }
    static comando(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            deveui: dato.deveui,
            ejecutado: dato.ejecutado,
            error: dato.error,
            fCnt: dato.fCnt,
            payload: dato.payload,
            puerto: dato.puerto,
            timestamp: dato.timestamp.toISOString(),
            usuario: dato.usuario,
            // Calculado
            comando: this.getNombreComando(dato.puerto),
            estado: getEstadoComando(dato.ejecutado, dato.error),
        };
        Object.keys(dto).forEach(key => dto[key] === null ? delete dto[key] : {});
        return dto;
    }
    static comandos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.comando(dato));
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
    // //
    static getDescripcionAlerta(codigo) {
        const alertas = {
            1: 'BAT',
            2: 'CO2',
            3: 'HUM',
            10: 'ACEL',
        };
        let desc = alertas[codigo];
        if (!desc) {
            desc = 'IND';
        }
        return desc;
    }
    static getNombreComando(puerto) {
        const comandos = {
            1: 'Activacion Acel',
        };
        if (comandos[puerto]) {
            return comandos[puerto];
        }
        else {
            return `No Identificado, Puerto ${puerto}`;
        }
    }
}
exports.SilobolsaParserService = SilobolsaParserService;
function getEstadoComando(ejecutado, error) {
    if (ejecutado) {
        return 'Ejecutado';
    }
    else if (error) {
        return 'Falló';
    }
    else {
        return 'Pendiente';
    }
}
