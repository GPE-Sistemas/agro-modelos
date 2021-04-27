import { LeanDocument } from 'mongoose';
import { IComandoDb, IComandoDTO, IDispositivoSilobolsaDb, IDispositivoSilobolsaDTO, IReporteSilobolsaDb, IReporteSilobolsaDTO } from '../../modelos';

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
            humedadEquilibrio: dato.humedadEquilibrio
        };
        return dto;
    }
    static reportes(datos: LeanDocument<IReporteSilobolsaDb>[]): IReporteSilobolsaDTO[] {
        const dto: IReporteSilobolsaDTO[] = [];
        for (const dato of datos) {
            dto.push(this.reporte(dato));
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
            // Populate
            ultimoReporte: dato.ultimoReporte ? this.reporte(dato.ultimoReporte) : undefined,
        };
        Object.keys(dto).forEach(key => (dto as any)[key] === null ? delete (dto as any)[key] : {});
        return dto;
    }
    static dispositivos(datos: LeanDocument<IDispositivoSilobolsaDb>[]): IDispositivoSilobolsaDTO[] {
        const dto: IDispositivoSilobolsaDTO[] = [];
        for (const dato of datos) {
            dto.push(this.dispositivo(dato));
        }
        return dto;
    }

    static comando(dato: LeanDocument<IComandoDb>): IComandoDTO {
        const dto: IComandoDTO = {
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
        Object.keys(dto).forEach(key => (dto as any)[key] === null ? delete (dto as any)[key] : {});
        return dto;
    }
    static comandos(datos: LeanDocument<IComandoDb>[]): IComandoDTO[] {
        const dto: IComandoDTO[] = [];
        for (const dato of datos) {
            dto.push(this.comando(dato));
        }
        return dto;
    }

    // //

    static getDescripcionAlerta(codigo: number): string {
        const alertas: { [key: number]: string } = {
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

    static getNombreComando(puerto: number) {
        const comandos: { [key: number]: string } = {
            1: 'Activacion Acel',
        };
        if (comandos[puerto]) {
            return comandos[puerto];
        } else {
            return `No Identificado, Puerto ${puerto}`;
        }
    }

}

function getEstadoComando(ejecutado: boolean, error: boolean) {
    if (ejecutado) {
        return 'Ejecutado';
    } else if (error) {
        return 'Falló';
    } else {
        return 'Pendiente';
    }
}
