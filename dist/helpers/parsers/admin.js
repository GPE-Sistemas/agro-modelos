"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminParserService = void 0;
class AdminParserService {
    static usuario(dato) {
        var _a, _b, _c;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            activo: dato.activo,
            idCliente: (_b = dato.idCliente) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idAplicaciones: (_c = dato.idAplicaciones) === null || _c === void 0 ? void 0 : _c.map(id => id.toHexString()),
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
            aplicaciones: dato.aplicaciones ? AdminParserService.aplicaciones(dato.aplicaciones) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static usuarios(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AdminParserService.usuario(dato));
        }
        return dto;
    }
    static cliente(dato) {
        var _a, _b, _c;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            activo: dato.activo,
            admin: dato.admin,
            idApplicationServer: (_b = dato.idApplicationServer) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idAplicaciones: (_c = dato.idAplicaciones) === null || _c === void 0 ? void 0 : _c.map(id => id.toHexString()),
            nombre: dato.nombre,
            networkServerId: dato.networkServerId,
            organizationId: dato.organizationId,
            serviceProfileId: dato.serviceProfileId,
            gatewayIds: dato.gatewayIds,
            //
            applicationServer: dato.applicationServer ? AdminParserService.applicationServer(dato.applicationServer) : undefined,
            aplicaciones: dato.aplicaciones ? AdminParserService.aplicaciones(dato.aplicaciones) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static clientes(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AdminParserService.cliente(dato));
        }
        return dto;
    }
    static aplicacion(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            urlApiAplicacion: dato.urlApiAplicacion,
            urlApiEntrada: dato.urlApiEntrada,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static aplicaciones(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AdminParserService.aplicacion(dato));
        }
        return dto;
    }
    static applicationServer(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            config: dato.config,
            tipo: dato.tipo,
            url: dato.url,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static applicationServers(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AdminParserService.applicationServer(dato));
        }
        return dto;
    }
    static dispositivoAdmin(dato) {
        var _a, _b, _c, _d;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            idApplicationServer: (_b = dato.idApplicationServer) === null || _b === void 0 ? void 0 : _b.toHexString(),
            deveui: dato.deveui,
            deviceName: dato.deviceName,
            descripcion: dato.descripcion,
            deviceProfileId: dato.deviceProfileId,
            idCliente: (_c = dato.idCliente) === null || _c === void 0 ? void 0 : _c.toHexString(),
            idLote: (_d = dato.idLote) === null || _d === void 0 ? void 0 : _d.toHexString(),
            tipo: dato.tipo,
            //
            applicationServer: dato.applicationServer ? AdminParserService.applicationServer(dato.applicationServer) : undefined,
            cliente: dato.cliente ? AdminParserService.cliente(dato.cliente) : undefined,
            lote: dato.lote ? AdminParserService.loteDispositvo(dato.lote) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static dispositivosAdmin(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AdminParserService.dispositivoAdmin(dato));
        }
        return dto;
    }
    static loteDispositvo(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            key: dato.key,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static lotesDispositvo(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AdminParserService.loteDispositvo(dato));
        }
        return dto;
    }
    static gateway(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            description: dato.description,
            gatewayId: dato.gatewayId,
            idApplicationServer: dato.idApplicationServer,
            name: dato.name,
            networkServerId: dato.networkServerId,
            organizationId: dato.organizationId,
            coordenadas: dato.coordenadas,
            gpsDiferencial: dato.gpsDiferencial,
            //
            applicationServer: dato.applicationServer ? AdminParserService.applicationServer(dato.applicationServer) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static gateways(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AdminParserService.gateway(dato));
        }
        return dto;
    }
}
exports.AdminParserService = AdminParserService;
