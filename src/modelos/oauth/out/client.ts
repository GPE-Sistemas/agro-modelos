export interface IClientDTO {
    _id: string;
    clientId: string;
    // clientSecret: string;
    grants: string[];
    redirectUris: string[]
}
