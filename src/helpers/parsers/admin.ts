import { LeanDocument } from 'mongoose';
import { IAplicacionDb, IAplicacionDTO, IApplicationServerDb, IApplicationServerDTO, IClienteDb, IClienteDTO, IDispositivoAdminDb, IDispositivoAdminDTO, IGatewayDb, IGatewayDTO, ILoteDispositivoDb, ILoteDispositivoDTO, IUsuarioDb, IUsuarioDTO } from '../../modelos';

export class AdminParserService {

    static usuario(dato: LeanDocument<IUsuarioDb>): IUsuarioDTO {
        const dto: IUsuarioDTO = {
            _id: dato._id?.toHexString(),
            activo: dato.activo,
            idCliente: dato.idCliente?.toHexString(),
            idAplicaciones: dato.idAplicaciones?.map( id => id.toHexString()),
            usuario: dato.usuario,
            apellido: dato.apellido,
            nombre: dato.nombre,
            email: dato.email,
            notificaciones: dato.notificaciones,
            notificacionesActivas: dato.notificacionesActivas,
            telefono: dato.telefono,
            telegramChatId: dato.telegramChatId,
            rol: dato.rol,
            //
            cliente: dato.cliente ? AdminParserService.cliente(dato.cliente) : undefined,
            aplicaciones: dato.aplicaciones? AdminParserService.aplicaciones(dato.aplicaciones) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static usuarios(datos: LeanDocument<IUsuarioDb>[]): IUsuarioDTO[] {
        const dto: IUsuarioDTO[] = [];
        for (const dato of datos) {
            dto.push(AdminParserService.usuario(dato));
        }
        return dto;
    }

    static cliente(dato: LeanDocument<IClienteDb>): IClienteDTO {
        const dto: IClienteDTO = {
            _id: dato._id?.toHexString(),
            activo: dato.activo,
            admin: dato.admin,
            idApplicationServer: dato.idApplicationServer?.toHexString(),
            idAplicaciones: dato.idAplicaciones?.map( id => id.toHexString()),
            nombre: dato.nombre,
            networkServerId: dato.networkServerId,
            organizationId: dato.organizationId,
            serviceProfileId: dato.serviceProfileId,
            gatewayIds: dato.gatewayIds,
            //
            applicationServer: dato.applicationServer? AdminParserService.applicationServer(dato.applicationServer) : undefined,
            aplicaciones: dato.aplicaciones? AdminParserService.aplicaciones(dato.aplicaciones) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static clientes(datos: LeanDocument<IClienteDb>[]): IClienteDTO[] {
        const dto: IClienteDTO[] = [];
        for (const dato of datos) {
            dto.push(AdminParserService.cliente(dato));
        }
        return dto;
    }

    static aplicacion(dato: LeanDocument<IAplicacionDb>): IAplicacionDTO {
        const dto: IAplicacionDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            urlApiAplicacion: dato.urlApiAplicacion,
            urlApiEntrada: dato.urlApiEntrada,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static aplicaciones(datos: LeanDocument<IAplicacionDb>[]): IAplicacionDTO[] {
        const dto: IAplicacionDTO[] = [];
        for (const dato of datos) {
            dto.push(AdminParserService.aplicacion(dato));
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
            dto.push(AdminParserService.applicationServer(dato));
        }
        return dto;
    }

    static dispositivoAdmin(dato: LeanDocument<IDispositivoAdminDb>): IDispositivoAdminDTO {
        const dto: IDispositivoAdminDTO = {
            _id: dato._id?.toHexString(),
            idApplicationServer: dato.idApplicationServer?.toHexString(),
            deveui: dato.deveui,
            deviceName: dato.deviceName,
            descripcion: dato.descripcion,
            deviceProfileId: dato.deviceProfileId,
            idCliente: dato.idCliente?.toHexString(),
            idLote: dato.idLote?.toHexString(),
            tipo: dato.tipo,
            //
            applicationServer: dato.applicationServer? AdminParserService.applicationServer(dato.applicationServer) : undefined,
            cliente: dato.cliente? AdminParserService.cliente(dato.cliente) : undefined,
            lote: dato.lote? AdminParserService.loteDispositvo(dato.lote) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static dispositivosAdmin(datos: LeanDocument<IDispositivoAdminDb>[]): IDispositivoAdminDTO[] {
        const dto: IDispositivoAdminDTO[] = [];
        for (const dato of datos) {
            dto.push(AdminParserService.dispositivoAdmin(dato));
        }
        return dto;
    }

    static loteDispositvo(dato: LeanDocument<ILoteDispositivoDb>): ILoteDispositivoDTO {
        const dto: ILoteDispositivoDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            key: dato.key,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static lotesDispositvo(datos: LeanDocument<ILoteDispositivoDb>[]): ILoteDispositivoDTO[] {
        const dto: ILoteDispositivoDTO[] = [];
        for (const dato of datos) {
            dto.push(AdminParserService.loteDispositvo(dato));
        }
        return dto;
    }

    static gateway(dato: LeanDocument<IGatewayDb>): IGatewayDTO {
        const dto: IGatewayDTO = {
            _id: dato._id?.toHexString(),
            description: dato.description,
            gatewayId: dato.gatewayId,
            idApplicationServer: dato.idApplicationServer,
            name: dato.name,
            networkServerId: dato.networkServerId,
            organizationId: dato.organizationId,
            coordenadas: dato.coordenadas,
            gpsDiferencial: dato.gpsDiferencial,
            //
            applicationServer: dato.applicationServer? AdminParserService.applicationServer(dato.applicationServer) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static gateways(datos: LeanDocument<IGatewayDb>[]): IGatewayDTO[] {
        const dto: IGatewayDTO[] = [];
        for (const dato of datos) {
            dto.push(AdminParserService.gateway(dato));
        }
        return dto;
    }

}
