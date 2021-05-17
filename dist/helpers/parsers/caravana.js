"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaravanaParserService = void 0;
class CaravanaParserService {
    static reporte(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            deveui: dato.deveui,
            idAsignado: dato.idAsignado,
            fecha: dato.fecha.toISOString(),
            ubicacion: dato.ubicacion
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
        const horasReporte = dato.frecuenciaReporte ? this.hexaAHoras(dato.frecuenciaReporte) : undefined;
        const dto = {
            _id: dato._id.toHexString(),
            acelerometro: dato.acelerometro,
            adr: dato.adr,
            deveui: dato.deveui,
            deviceName: dato.deviceName,
            dr: dato.dr,
            fCnt: dato.fCnt,
            fechaAsignacion: (_a = dato.fechaAsignacion) === null || _a === void 0 ? void 0 : _a.toISOString(),
            fechaUltimoUplink: (_b = dato.fechaUltimoUplink) === null || _b === void 0 ? void 0 : _b.toISOString(),
            frecuenciaReporte: dato.frecuenciaReporte,
            idAsignado: dato.idAsignado,
            idUltimoReporte: (_c = dato.idUltimoReporte) === null || _c === void 0 ? void 0 : _c.toHexString(),
            metadatos: dato.metadatos,
            red: dato.red,
            //
            horasReporte,
            bateria: this.getBateria(horasReporte === null || horasReporte === void 0 ? void 0 : horasReporte.length, +dato.fCnt),
            // duracion: this.getDuracion(frecuenciaReporte?.length, dato.fCnt),
            //
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
    // //
    static hexaAHoras(hexa) {
        const horas = [];
        let binario = '';
        for (let x = 0; x < hexa.length; x++) {
            const char = hexa.charAt(x);
            let bin = parseInt(char, 16).toString(2);
            while (bin.length < 4) {
                bin = '0' + bin;
            }
            binario += bin;
        }
        for (let x = 0; x < binario.length; x++) {
            if (binario[x] === '1') {
                const minutos = x * 10;
                const date = new Date();
                date.setHours(0, 0, 0, 0);
                date.setMinutes(minutos);
                const hh = date.getHours();
                let mm = date.getMinutes().toString();
                while (mm.length < 2) {
                    mm += '0';
                }
                const hora = `${hh}:${mm}`;
                horas.push(hora);
            }
        }
        return horas;
    }
    static getBateria(cantReportesDiarios, mensajesEnviados) {
        if (!cantReportesDiarios && mensajesEnviados) {
            return Math.trunc(100 - (mensajesEnviados * 100 / 9984));
        }
        else {
            if (mensajesEnviados && cantReportesDiarios) {
                // tslint:disable-next-line: max-line-length
                const reportesPorFrecuencia = [1681, 2899, 3823, 4547, 5125, 5610, 6006, 6352, 6642, 6900, 7117, 7321, 7488, 7644, 7800, 7920, 8041, 8136, 8246, 8320, 8421, 8492, 8556, 8638];
                const bateria = Math.trunc(100 - (mensajesEnviados * 100 / reportesPorFrecuencia[cantReportesDiarios - 1]));
                return bateria;
            }
            else {
                return;
            }
        }
    }
    static getDuracion(cantReportesDiarios, mensajesEnviados) {
        if (!cantReportesDiarios && mensajesEnviados) {
            const reportesRestantes = 9984 - mensajesEnviados;
            const diasRestantes = Math.trunc(reportesRestantes / 96);
            const date = new Date();
            date.setDate(date.getDate() + diasRestantes);
            return date.toString();
        }
        else {
            if (mensajesEnviados) {
                // tslint:disable-next-line: max-line-length
                const reportesPorFrecuencia = [1681, 2899, 3823, 4547, 5125, 5610, 6006, 6352, 6642, 6900, 7117, 7321, 7488, 7644, 7800, 7920, 8041, 8136, 8246, 8320, 8421, 8492, 8556, 8638];
                const reportesRestantes = reportesPorFrecuencia[cantReportesDiarios - 1] - mensajesEnviados;
                const diasRestantes = Math.trunc(reportesRestantes / cantReportesDiarios);
                const date = new Date();
                date.setDate(date.getDate() + diasRestantes);
                return date.toString();
            }
            else {
                return;
            }
        }
    }
}
exports.CaravanaParserService = CaravanaParserService;
