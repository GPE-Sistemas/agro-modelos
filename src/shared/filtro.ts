export interface IFiltro {
    _id?: string;
    page?: number;
    limit?: number;
    sort?: string;
    search?: string;
    searchFields?: string[];
    desde?: number;
    hasta?: number;
    [key: string]: any;
}
