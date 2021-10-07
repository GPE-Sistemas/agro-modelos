export interface IFilter {
    field: string | string[];
    type: 'number' | 'string' | 'boolean' | 'date' | 'object' | 'regex' | 'objectid';
    value: any;
}

export interface IQueryParams {
    // Para paginacion
    page?: number;
    limit?: number;
    sort?: string;
    // Filtros
    filter?: IFilter[] | string;
    [key: string]: any;
}
