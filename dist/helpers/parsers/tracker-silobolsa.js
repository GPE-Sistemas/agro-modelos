"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackerSilobolsaParserService = void 0;
class TrackerSilobolsaParserService {
    static reporte(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            deveui: dato.deveui,
            idSilobolsa: dato.idSilobolsa,
            fecha: dato.fecha.toISOString(),
            alarma: dato.alarma
        };
        return dto;
    }
    static reportes(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackerSilobolsaParserService.reporte(dato));
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
            posicion: dato.posicion,
            firmware: dato.firmware,
            sensibilidad: dato.sensibilidad,
            // Populate
            ultimoReporte: dato.ultimoReporte ? TrackerSilobolsaParserService.reporte(dato.ultimoReporte) : undefined,
        };
        Object.keys(dto).forEach(key => dto[key] === null ? delete dto[key] : {});
        return dto;
    }
    static dispositivos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackerSilobolsaParserService.dispositivo(dato));
        }
        return dto;
    }
}
exports.TrackerSilobolsaParserService = TrackerSilobolsaParserService;
