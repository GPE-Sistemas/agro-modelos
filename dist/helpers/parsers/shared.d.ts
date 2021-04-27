import { LeanDocument } from 'mongoose';
import { IAlertaDb, IAlertaDTO, ILogDispositivoDb, ILogDispositivoDTO } from '../../modelos';
export declare class SharedParserService {
    static estado(dato: {
        fecha: Date;
        usuario: string;
        estado: string;
    }): {
        fecha: string;
        usuario: string;
        estado: string;
    };
    static estados(datos: {
        fecha: Date;
        usuario: string;
        estado: string;
    }[]): {
        fecha: string;
        usuario: string;
        estado: string;
    }[];
    static comentario(dato: {
        fecha: Date;
        usuario: string;
        comentario: string;
    }): {
        fecha: string;
        usuario: string;
        comentario: string;
    };
    static comentarios(datos: {
        fecha: Date;
        usuario: string;
        comentario: string;
    }[]): {
        fecha: string;
        usuario: string;
        comentario: string;
    }[];
    static alerta(dato: LeanDocument<IAlertaDb>): IAlertaDTO;
    static alertas(datos: LeanDocument<IAlertaDb>[]): IAlertaDTO[];
    static logDispositivo(dato: LeanDocument<ILogDispositivoDb>): ILogDispositivoDTO;
    static logsDispositivos(datos: LeanDocument<ILogDispositivoDb>[]): ILogDispositivoDTO[];
}
//# sourceMappingURL=shared.d.ts.map