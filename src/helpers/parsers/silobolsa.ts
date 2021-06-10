import { LeanDocument } from 'mongoose';
import { IDispositivoSilobolsaDb, IDispositivoSilobolsaDTO, IReporteSilobolsaDb, IReporteSilobolsaDTO } from '../../modelos';

export class SilobolsaParserService {

    static reporte(dato: LeanDocument<IReporteSilobolsaDb>): IReporteSilobolsaDTO {
        const dto: IReporteSilobolsaDTO = {
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
    static reportes(datos: LeanDocument<IReporteSilobolsaDb>[]): IReporteSilobolsaDTO[] {
        const dto: IReporteSilobolsaDTO[] = [];
        for (const dato of datos) {
            dto.push(SilobolsaParserService.reporte(dato));
        }
        return dto;
    }

    static dispositivo(dato: LeanDocument<IDispositivoSilobolsaDb>): IDispositivoSilobolsaDTO {
        const dto: IDispositivoSilobolsaDTO = {
            // Base
            _id: dato._id.toHexString(),
            adr: dato.adr,
            deveui: dato.deveui,
            deviceName: dato.deviceName,
            dr: dato.dr,
            fCnt: dato.fCnt,
            fechaUltimoUplink: dato.fechaUltimoUplink?.toISOString(),
            metadatos: dato.metadatos,
            red: dato.red,
            // Especificos Silobolsa
            fechaAsignacion: dato.fechaAsignacion?.toISOString(),
            idSilobolsa: dato.idSilobolsa,
            idUltimoReporte: dato.idUltimoReporte?.toHexString(),
            alarmaActiva: dato.alarmaActiva,
            posicion: dato.posicion,
            alerta: dato.alerta,
            // Populate
            ultimoReporte: dato.ultimoReporte ? SilobolsaParserService.reporte(dato.ultimoReporte) : undefined,
        };
        Object.keys(dto).forEach(key => (dto as any)[key] === null ? delete (dto as any)[key] : {});
        return dto;
    }
    static dispositivos(datos: LeanDocument<IDispositivoSilobolsaDb>[]): IDispositivoSilobolsaDTO[] {
        const dto: IDispositivoSilobolsaDTO[] = [];
        for (const dato of datos) {
            dto.push(SilobolsaParserService.dispositivo(dato));
        }
        return dto;
    }
}
