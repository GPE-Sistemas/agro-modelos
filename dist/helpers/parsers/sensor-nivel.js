"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorNivelParserService = void 0;
class SensorNivelParserService {
    static reporte(dato) {
        var _a, _b;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            deveui: dato.deveui,
            fecha: (_b = dato.fecha) === null || _b === void 0 ? void 0 : _b.toISOString(),
            distancia: dato.distancia,
        };
        return dto;
    }
    static reportes(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(SensorNivelParserService.reporte(dato));
        }
        return dto;
    }
    static dispositivo(dato) {
        var _a, _b, _c;
        const dto = {
            // Base
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            adr: dato.adr,
            deveui: dato.deveui,
            deviceName: dato.deviceName,
            dr: dato.dr,
            fCnt: dato.fCnt,
            fechaUltimoUplink: (_b = dato.fechaUltimoUplink) === null || _b === void 0 ? void 0 : _b.toISOString(),
            metadatos: dato.metadatos,
            red: dato.red,
            // Especificos Silobolsa
            idUltimoReporte: (_c = dato.idUltimoReporte) === null || _c === void 0 ? void 0 : _c.toHexString(),
            ubicacion: dato.ubicacion,
            firmware: dato.firmware,
            // Populate
            ultimoReporte: dato.ultimoReporte ? SensorNivelParserService.reporte(dato.ultimoReporte) : undefined,
        };
        Object.keys(dto).forEach(key => dto[key] === null ? delete dto[key] : {});
        return dto;
    }
    static dispositivos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(SensorNivelParserService.dispositivo(dato));
        }
        return dto;
    }
}
exports.SensorNivelParserService = SensorNivelParserService;
