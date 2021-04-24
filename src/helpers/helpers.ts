import { ObjectSchema, ValidationResult } from 'joi';
import { Types } from 'mongoose';
import { IAck, IFiltro, IUplink } from '../modelos';

export function validateSchema(dato: any, schema: ObjectSchema): void {
    const result: ValidationResult = schema.validate(dato);
    if (!result.error) {
        return;
    } else {
        throw {
            error: result.error,
            status: 400,
            mensaje: result.error?.details?.[0]?.message
        };
    }
}

export function getFiltroFromQuery(queryParams: any) {
    const keysIgnorar = ['_id', 'page', 'limit', 'sort', 'desde', 'hasta', 'search', 'searchFields'];
    const filtro: IFiltro = {
        _id: queryParams._id,
        desde: +queryParams.desde,
        hasta: +queryParams.hasta,
        page: +queryParams.page || 0,
        limit: +queryParams.limit || 0,
        sort: queryParams.sort?.toString() || '-fecha',
        search: queryParams.search?.toString(),
        searchFields: queryParams.searchFields ? JSON.parse(queryParams.searchFields) : [],
    };
    for (const key in queryParams) {
        if (!keysIgnorar.includes(key)) {
            filtro[key] = queryParams[key];
        }
    }
    return filtro;
}

export function filtroBusqueda(filtro?: IFiltro) {
    const filtroDb: any = {};
    if (filtro) {
        const keysIgnorar = ['_id', 'page', 'limit', 'sort', 'desde', 'hasta', 'search', 'searchFields'];
        if (filtro?._id) {
            filtroDb._id = new Types.ObjectId(filtro._id);
            return filtroDb;
        }
        if (filtro.desde && filtro.hasta) {
            filtroDb.fecha = { $gte: filtro.desde, $lte: filtro.hasta };
        } else if (filtro.desde) {
            filtroDb.fecha = { $gte: filtro.desde };
        } else if (filtro.hasta) {
            filtroDb.fecha = { $lte: filtro.hasta };
        }
        if (filtro.search && filtro.searchFields?.length) {
            filtroDb.$or = [];
            for (const searchField of filtro.searchFields) {
                filtroDb.$or.push({ [searchField]: { $regex: filtro.search, $options: 'i' } });
            }
        }
        for (const key in filtro) {
            if (!keysIgnorar.includes(key)) {
                filtroDb[key] = filtro[key];
            }
        }
    }
    return filtroDb;
}

export function uplinkLabels(uplink: IUplink) {
    const labels = {
        aplicacion: uplink.aplicacion,
        deveui: uplink.deveui,
        idCliente: uplink.idCliente,
        payload: uplink.payload,
        puerto: uplink.puerto + '',
        tipo: 'uplink',
    };
    return labels;
}

export function ackLabels(ack: IAck) {
    const labels = {
        aplicacion: ack.aplicacion,
        ack: ack.acknowledged ? 'true' : 'false',
        deveui: ack.deveui,
        fCnt: ack.fCnt + '',
        idCliente: ack.idCliente,
        tipo: 'ack',
    };
    return labels;
}
