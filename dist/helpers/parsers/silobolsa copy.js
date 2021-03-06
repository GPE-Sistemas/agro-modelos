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
            humedadEquilibrio: dato.humedadEquilibrio,
            alertaBateria: dato.alertaBateria,
            alertaCo2: dato.alertaCo2,
            alertaHumedad: dato.alertaHumedad
        };
        return dto;
    }
    static reportes(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(SilobolsaParserService.reporte(dato));
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
            alerta: dato.alerta,
            // Populate
            ultimoReporte: dato.ultimoReporte ? SilobolsaParserService.reporte(dato.ultimoReporte) : undefined,
        };
        Object.keys(dto).forEach(key => dto[key] === null ? delete dto[key] : {});
        return dto;
    }
    static dispositivos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(SilobolsaParserService.dispositivo(dato));
        }
        return dto;
    }
}
exports.SilobolsaParserService = SilobolsaParserService;
