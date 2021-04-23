interface IUsuarioToken {
	_id: string;
    email: string;
    nombre: string;
    apellido: string;
    rol: string;
	idCliente?: string;
	clienteAdmin: boolean;
	// activo: boolean;
	//
    aplicaciones: string[];
}

export interface IToken {
	accessToken: string;
	accessTokenExpiresAt?: Date;
	refreshToken?: string;
	refreshTokenExpiresAt?: Date;
	scope?: string | string[];
	client: Record<string, unknown>;
	user: IUsuarioToken;
}
