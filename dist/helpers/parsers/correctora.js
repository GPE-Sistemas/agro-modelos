"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorrectoraParserService = void 0;
class CorrectoraParserService {
    static pedidoReporte(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            numeroSerie: dato.numeroSerie,
            fecha: dato.fecha.toISOString(),
            aplicado: dato.aplicado,
            fechaCreacion: dato.fechaCreacion.toISOString(),
        };
        return dto;
    }
    static pedidosReportes(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(CorrectoraParserService.pedidoReporte(dato));
        }
        return dto;
    }
    static reporte(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            fecha: dato.fecha.toISOString(),
            deveui: dato.deveui,
            numeroSerie: dato.numeroSerie,
            corrected: dato.corrected,
            presion: dato.presion,
            temperatura: dato.temperatura,
            uncorrected: dato.uncorrected
        };
        return dto;
    }
    static reportes(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(CorrectoraParserService.reporte(dato));
        }
        return dto;
    }
    static dispositivo(dato) {
        var _a, _b, _c;
        const dto = {
            _id: dato._id.toHexString(),
            adr: dato.adr,
            deveui: dato.deveui,
            deviceName: dato.deviceName,
            dr: dato.dr,
            fCnt: dato.fCnt,
            fechaUltimoUplink: (_a = dato.fechaUltimoUplink) === null || _a === void 0 ? void 0 : _a.toISOString(),
            metadatos: dato.metadatos,
            red: dato.red,
            //
            fechaAsignacion: (_b = dato.fechaAsignacion) === null || _b === void 0 ? void 0 : _b.toISOString(),
            firmware: dato.firmware,
            numeroSerieCorrectora: dato.numeroSerieCorrectora,
            idUltimoReporte: (_c = dato.idUltimoReporte) === null || _c === void 0 ? void 0 : _c.toHexString(),
            //
            ultimoReporte: dato.ultimoReporte ? CorrectoraParserService.reporte(dato.ultimoReporte) : undefined,
        };
        Object.keys(dto).forEach(key => dto[key] === null ? delete dto[key] : {});
        return dto;
    }
    static dispositivos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(CorrectoraParserService.dispositivo(dato));
        }
        return dto;
    }
}
exports.CorrectoraParserService = CorrectoraParserService;
