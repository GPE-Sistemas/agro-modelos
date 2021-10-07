export interface IParsedQuery {
    limit: number;
    skip: number;
    sort: string;
    filter: {
        [key: string]: any;
    }
}
