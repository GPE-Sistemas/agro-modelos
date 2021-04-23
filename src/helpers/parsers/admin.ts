import { LeanDocument } from 'mongoose';
import { IAplicacionDb, IAplicacionDTO, IApplicationServerDb, IApplicationServerDTO, IClienteDb, IClienteDTO, IDispositivoAdminDb, IDispositivoAdminDTO, ILoteDispositivoDb, ILoteDispositivoDTO, IUsuarioDb, IUsuarioDTO } from '../../modelos';

export class AdminParserService {

    public usuario(dato: LeanDocument<IUsuarioDb>): IUsuarioDTO {
        const dto: IUsuarioDTO = {
            _id: dato._id?.toHexString(),
            idCliente: dato.idCliente.toHexString(),
            usuario: dato.usuario,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    public usuarios(datos: LeanDocument<IUsuarioDb>[]): IUsuarioDTO[] {
        const dto: IUsuarioDTO[] = [];
        for (const dato of datos) {
            dto.push(this.usuario(dato));
        }
        return dto;
    }

    public cliente(dato: LeanDocument<IClienteDb>): IClienteDTO {
        const dto: IClienteDTO = {
            _id: dato._id?.toHexString(),
            applicationServerId: dato.applicationServerId,
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
    public clientes(datos: LeanDocument<IClienteDb>[]): IClienteDTO[] {
        const dto: IClienteDTO[] = [];
        for (const dato of datos) {
            dto.push(this.cliente(dato));
        }
        return dto;
    }

    public aplicacion(dato: LeanDocument<IAplicacionDb>): IAplicacionDTO {
        const dto: IAplicacionDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            urlsApiAplicacion: dato.urlsApiAplicacion,
            urlsApiEntrada: dato.urlsApiEntrada,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    public aplicaciones(datos: LeanDocument<IAplicacionDb>[]): IAplicacionDTO[] {
        const dto: IAplicacionDTO[] = [];
        for (const dato of datos) {
            dto.push(this.aplicacion(dato));
        }
        return dto;
    }

    public applicationServer(dato: LeanDocument<IApplicationServerDb>): IApplicationServerDTO {
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
    public applicationServers(datos: LeanDocument<IApplicationServerDb>[]): IApplicationServerDTO[] {
        const dto: IApplicationServerDTO[] = [];
        for (const dato of datos) {
            dto.push(this.applicationServer(dato));
        }
        return dto;
    }

    public dispositivoAdmin(dato: LeanDocument<IDispositivoAdminDb>): IDispositivoAdminDTO {
        const dto: IDispositivoAdminDTO = {
            _id: dato._id?.toHexString(),
            applicationServerId: dato.applicationServerId,
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
    public dispositivosAdmin(datos: LeanDocument<IDispositivoAdminDb>[]): IDispositivoAdminDTO[] {
        const dto: IDispositivoAdminDTO[] = [];
        for (const dato of datos) {
            dto.push(this.dispositivoAdmin(dato));
        }
        return dto;
    }

    public loteDispositvo(dato: LeanDocument<ILoteDispositivoDb>): ILoteDispositivoDTO {
        const dto: ILoteDispositivoDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    public lotesDispositvo(datos: LeanDocument<ILoteDispositivoDb>[]): ILoteDispositivoDTO[] {
        const dto: ILoteDispositivoDTO[] = [];
        for (const dato of datos) {
            dto.push(this.loteDispositvo(dato));
        }
        return dto;
    }

}
