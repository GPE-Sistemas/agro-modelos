export interface IFilter {
    field: string | string[];
    type: 'number' | 'string' | 'boolean' | 'date' | 'object' | 'regex' | 'objectid';
    value: any;
}
export interface IQueryParams {
    page?: number;
    limit?: number;
    sort?: string;
    filter?: IFilter[] | string;
    [key: string]: any;
}
//# sourceMappingURL=queryParams.d.ts.map