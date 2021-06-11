import { LeanDocument } from 'mongoose';
import { IDispositivoTrackerSilobolsaDb, IDispositivoTrackerSilobolsaDTO, IReporteTrackerSilobolsaDb, IReporteTrackerSilobolsaDTO } from '../../modelos';

export class TrackerSilobolsaParserService {

    static reporte(dato: LeanDocument<IReporteTrackerSilobolsaDb>): IReporteTrackerSilobolsaDTO {
        const dto: IReporteTrackerSilobolsaDTO = {
            _id: dato._id.toHexString(),
            deveui: dato.deveui,
            idSilobolsa: dato.idSilobolsa,
            fecha: dato.fecha.toISOString(),
            alarma: dato.alarma
        };
        return dto;
    }
    static reportes(datos: LeanDocument<IReporteTrackerSilobolsaDb>[]): IReporteTrackerSilobolsaDTO[] {
        const dto: IReporteTrackerSilobolsaDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackerSilobolsaParserService.reporte(dato));
        }
        return dto;
    }

    static dispositivo(dato: LeanDocument<IDispositivoTrackerSilobolsaDb>): IDispositivoTrackerSilobolsaDTO {
        const dto: IDispositivoTrackerSilobolsaDTO = {
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
            posicion: dato.posicion,
            firmware: dato.firmware,
            sensibilidad: dato.sensibilidad,
            // Populate
            ultimoReporte: dato.ultimoReporte ? TrackerSilobolsaParserService.reporte(dato.ultimoReporte) : undefined,
        };
        Object.keys(dto).forEach(key => (dto as any)[key] === null ? delete (dto as any)[key] : {});
        return dto;
    }
    static dispositivos(datos: LeanDocument<IDispositivoTrackerSilobolsaDb>[]): IDispositivoTrackerSilobolsaDTO[] {
        const dto: IDispositivoTrackerSilobolsaDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackerSilobolsaParserService.dispositivo(dato));
        }
        return dto;
    }
}
