import { LeanDocument } from 'mongoose';
import { IDispositivoCorrectoraDb, IDispositivoCorrectoraDTO, IReporteCorrectoraDb, IReporteCorrectoraDTO } from '../../modelos';

export class CorrectoraParserService {

    static reporte(dato: LeanDocument<IReporteCorrectoraDb>): IReporteCorrectoraDTO {
        const dto: IReporteCorrectoraDTO = {
            _id: dato._id.toHexString(),
            fecha: dato.fecha.toISOString(),
            deveui: dato.deveui,
            numeroSerieCorrectora: dato.numeroSerieCorrectora,
            corrected: dato.corrected,
            presion: dato.presion,
            temperatura: dato.temperatura,
            uncorrected: dato.uncorrected
        };
        return dto;
    }
    static reportes(datos: LeanDocument<IReporteCorrectoraDb>[]): IReporteCorrectoraDTO[] {
        const dto: IReporteCorrectoraDTO[] = [];
        for (const dato of datos) {
            dto.push(this.reporte(dato));
        }
        return dto;
    }

    static dispositivo(dato: LeanDocument<IDispositivoCorrectoraDb>): IDispositivoCorrectoraDTO {
        const dto: IDispositivoCorrectoraDTO = {
            _id: dato._id.toHexString(),
            adr: dato.adr,
            deveui: dato.deveui,
            deviceName: dato.deviceName,
            dr: dato.dr,
            fCnt: dato.fCnt,
            fechaUltimoUplink: dato.fechaUltimoUplink?.toISOString(),
            metadatos: dato.metadatos,
            red: dato.red,
            //
            fechaAsignacion: dato.fechaAsignacion?.toISOString(),
            firmware: dato.firmware,
            numeroSerieCorrectora: dato.numeroSerieCorrectora,
            idUltimoReporte: dato.idUltimoReporte?.toHexString(),
            //
            ultimoReporte: dato.ultimoReporte ? this.reporte(dato.ultimoReporte) : undefined,
        };
        Object.keys(dto).forEach(key => (dto as any)[key] === null ? delete (dto as any)[key] : {});
        return dto;
    }
    static dispositivos(datos: LeanDocument<IDispositivoCorrectoraDb>[]): IDispositivoCorrectoraDTO[] {
        const dto: IDispositivoCorrectoraDTO[] = [];
        for (const dato of datos) {
            dto.push(this.dispositivo(dato));
        }
        return dto;
    }

}
