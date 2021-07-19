import { LeanDocument } from 'mongoose';
import { IDispositivoSensorNivelDb, IDispositivoSensorNivelDTO, IReporteSensorNivelDb, IReporteSensorNivelDTO } from '../../modelos';

export class SensorNivelParserService {

    static reporte(dato: LeanDocument<IReporteSensorNivelDb>): IReporteSensorNivelDTO {
        const dto: IReporteSensorNivelDTO = {
            _id: dato._id?.toHexString(),
            deveui: dato.deveui,
            fecha: dato.fecha?.toISOString(),
            distancia: dato.distancia,
        };
        return dto;
    }
    static reportes(datos: LeanDocument<IReporteSensorNivelDb>[]): IReporteSensorNivelDTO[] {
        const dto: IReporteSensorNivelDTO[] = [];
        for (const dato of datos) {
            dto.push(SensorNivelParserService.reporte(dato));
        }
        return dto;
    }

    static dispositivo(dato: LeanDocument<IDispositivoSensorNivelDb>): IDispositivoSensorNivelDTO {
        const dto: IDispositivoSensorNivelDTO = {
            // Base
            _id: dato._id?.toHexString(),
            adr: dato.adr,
            deveui: dato.deveui,
            deviceName: dato.deviceName,
            dr: dato.dr,
            fCnt: dato.fCnt,
            fechaUltimoUplink: dato.fechaUltimoUplink?.toISOString(),
            metadatos: dato.metadatos,
            red: dato.red,
            // Especificos Silobolsa
            idUltimoReporte: dato.idUltimoReporte?.toHexString(),
            ubicacion: dato.ubicacion,
            firmware: dato.firmware,
            // Populate
            ultimoReporte: dato.ultimoReporte ? SensorNivelParserService.reporte(dato.ultimoReporte) : undefined,
        };
        Object.keys(dto).forEach(key => (dto as any)[key] === null ? delete (dto as any)[key] : {});
        return dto;
    }
    static dispositivos(datos: LeanDocument<IDispositivoSensorNivelDb>[]): IDispositivoSensorNivelDTO[] {
        const dto: IDispositivoSensorNivelDTO[] = [];
        for (const dato of datos) {
            dto.push(SensorNivelParserService.dispositivo(dato));
        }
        return dto;
    }
}
