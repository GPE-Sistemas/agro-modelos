"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminParserService = void 0;
class AdminParserService {
    static usuario(dato) {
        var _a, _b;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            activo: dato.activo,
            idCliente: (_b = dato.idCliente) === null || _b === void 0 ? void 0 : _b.toHexString(),
            usuario: dato.usuario,
            apellido: dato.apellido,
            nombre: dato.nombre,
            email: dato.email,
            notificaciones: dato.notificaciones,
            notificacionesActivas: dato.notificacionesActivas,
            telefono: dato.telefono,
            telegramChatId: dato.telegramChatId,
            //
            cliente: dato.cliente ? AdminParserService.cliente(dato.cliente) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static usuarios(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.usuario(dato));
        }
        return dto;
    }
    static cliente(dato) {
        var _a, _b;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            activo: dato.activo,
            admin: dato.admin,
            idApplicationServer: (_b = dato.idApplicationServer) === null || _b === void 0 ? void 0 : _b.toHexString(),
            nombre: dato.nombre,
            applications: dato.applications,
            gateways: dato.gateways,
            networkServerId: dato.networkServerId,
            organizationId: dato.organizationId,
            serviceProfileId: dato.serviceProfileId
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static clientes(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.cliente(dato));
        }
        return dto;
    }
    static aplicacion(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            urlsApiAplicacion: dato.urlsApiAplicacion,
            urlsApiEntrada: dato.urlsApiEntrada,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static aplicaciones(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.aplicacion(dato));
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
            dto.push(this.applicationServer(dato));
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
            idLote: (_d = dato.idCliente) === null || _d === void 0 ? void 0 : _d.toHexString(),
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
            dto.push(this.dispositivoAdmin(dato));
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
            dto.push(this.loteDispositvo(dato));
        }
        return dto;
    }
}
exports.AdminParserService = AdminParserService;
