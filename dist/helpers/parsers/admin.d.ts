import { LeanDocument } from 'mongoose';
import { IAplicacionDb, IAplicacionDTO, IApplicationServerDb, IApplicationServerDTO, IClienteDb, IClienteDTO, IDispositivoAdminDb, IDispositivoAdminDTO, IGatewayDb, IGatewayDTO, ILoteDispositivoDb, ILoteDispositivoDTO, IUsuarioDb, IUsuarioDTO } from '../../modelos';
export declare class AdminParserService {
    static usuario(dato: LeanDocument<IUsuarioDb>): IUsuarioDTO;
    static usuarios(datos: LeanDocument<IUsuarioDb>[]): IUsuarioDTO[];
    static cliente(dato: LeanDocument<IClienteDb>): IClienteDTO;
    static clientes(datos: LeanDocument<IClienteDb>[]): IClienteDTO[];
    static aplicacion(dato: LeanDocument<IAplicacionDb>): IAplicacionDTO;
    static aplicaciones(datos: LeanDocument<IAplicacionDb>[]): IAplicacionDTO[];
    static applicationServer(dato: LeanDocument<IApplicationServerDb>): IApplicationServerDTO;
    static applicationServers(datos: LeanDocument<IApplicationServerDb>[]): IApplicationServerDTO[];
    static dispositivoAdmin(dato: LeanDocument<IDispositivoAdminDb>): IDispositivoAdminDTO;
    static dispositivosAdmin(datos: LeanDocument<IDispositivoAdminDb>[]): IDispositivoAdminDTO[];
    static loteDispositvo(dato: LeanDocument<ILoteDispositivoDb>): ILoteDispositivoDTO;
    static lotesDispositvo(datos: LeanDocument<ILoteDispositivoDb>[]): ILoteDispositivoDTO[];
    static gateway(dato: LeanDocument<IGatewayDb>): IGatewayDTO;
    static gateways(datos: LeanDocument<IGatewayDb>[]): IGatewayDTO[];
}
//# sourceMappingURL=admin.d.ts.map