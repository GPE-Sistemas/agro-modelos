import { LeanDocument } from 'mongoose';
import { IAplicacionDb, IAplicacionDTO, IApplicationServerDb, IApplicationServerDTO, IClienteDb, IClienteDTO, IDispositivoAdminDb, IDispositivoAdminDTO, ILoteDispositivoDb, ILoteDispositivoDTO, IUsuarioDb, IUsuarioDTO } from '../../modelos';

export class AdminParserService {

    static usuario(dato: LeanDocument<IUsuarioDb>): IUsuarioDTO {
        const dto: IUsuarioDTO = {
            _id: dato._id?.toHexString(),
            idCliente: dato.idCliente.toHexString(),
            usuario: dato.usuario,
            apellido: dato.apellido,
            nombre: dato.nombre
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static usuarios(datos: LeanDocument<IUsuarioDb>[]): IUsuarioDTO[] {
        const dto: IUsuarioDTO[] = [];
        for (const dato of datos) {
            dto.push(this.usuario(dato));
        }
        return dto;
    }

    static cliente(dato: LeanDocument<IClienteDb>): IClienteDTO {
        const dto: IClienteDTO = {
            _id: dato._id?.toHexString(),
            applicationServerId: dato.applicationServerId?.toHexString(),
            nombre: dato.nombre,
            applications: dato.applications,
            gateways: dato.gateways,
            networkServerId: dato.networkServerId,
            organizationId: dato.organizationId,
            serviceProfileId: dato.serviceProfileId
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static clientes(datos: LeanDocument<IClienteDb>[]): IClienteDTO[] {
        const dto: IClienteDTO[] = [];
        for (const dato of datos) {
            dto.push(this.cliente(dato));
        }
        return dto;
    }

    static aplicacion(dato: LeanDocument<IAplicacionDb>): IAplicacionDTO {
        const dto: IAplicacionDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            urlsApiAplicacion: dato.urlsApiAplicacion,
            urlsApiEntrada: dato.urlsApiEntrada,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static aplicaciones(datos: LeanDocument<IAplicacionDb>[]): IAplicacionDTO[] {
        const dto: IAplicacionDTO[] = [];
        for (const dato of datos) {
            dto.push(this.aplicacion(dato));
        }
        return dto;
    }

    static applicationServer(dato: LeanDocument<IApplicationServerDb>): IApplicationServerDTO {
        const dto: IApplicationServerDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            config: dato.config,
            tipo: dato.tipo,
            url: dato.url,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static applicationServers(datos: LeanDocument<IApplicationServerDb>[]): IApplicationServerDTO[] {
        const dto: IApplicationServerDTO[] = [];
        for (const dato of datos) {
            dto.push(this.applicationServer(dato));
        }
        return dto;
    }

    static dispositivoAdmin(dato: LeanDocument<IDispositivoAdminDb>): IDispositivoAdminDTO {
        const dto: IDispositivoAdminDTO = {
            _id: dato._id?.toHexString(),
            applicationServerId: dato.applicationServerId?.toHexString(),
            applicationId: dato.applicationId,
            deveui: dato.deveui,
            deviceName: dato.deviceName,
            deviceProfileId: dato.deviceProfileId,
            idCliente: dato.idCliente.toHexString(),
            idLote: dato.idCliente.toHexString(),
            tipo: dato.tipo,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static dispositivosAdmin(datos: LeanDocument<IDispositivoAdminDb>[]): IDispositivoAdminDTO[] {
        const dto: IDispositivoAdminDTO[] = [];
        for (const dato of datos) {
            dto.push(this.dispositivoAdmin(dato));
        }
        return dto;
    }

    static loteDispositvo(dato: LeanDocument<ILoteDispositivoDb>): ILoteDispositivoDTO {
        const dto: ILoteDispositivoDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static lotesDispositvo(datos: LeanDocument<ILoteDispositivoDb>[]): ILoteDispositivoDTO[] {
        const dto: ILoteDispositivoDTO[] = [];
        for (const dato of datos) {
            dto.push(this.loteDispositvo(dato));
        }
        return dto;
    }

}
