export interface IParsedQuery {
    page: number;
    limit: number;
    skip: number;
    sort: string;
    filter: {
        [key: string]: any;
    }
}