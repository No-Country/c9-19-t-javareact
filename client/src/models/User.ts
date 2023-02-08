export class User {
    id?: string;
    rol_id?: string;
    // rol: Rol
    token_id?: string;
    // token: Token
    comision_id?: string;
    // comision: Comision;
    name?: string;
    last_name?: string;
    dni?: number;
    username?: number;
    password?: string;

    static parseItem(raw: any): User {
        const usuario = new User();
        usuario.id = raw.id ? raw.id : undefined;
        usuario.rol_id = raw.rol_id ? raw.rol_id : undefined;
        usuario.token_id = raw.token_id ? raw.token_id : undefined;
        usuario.comision_id = raw.comision_id ? raw.comision_id : undefined;  
        usuario.name = raw.name ? raw.name : undefined;
        usuario.last_name = raw.last_name ? raw.last_name : undefined;
        usuario.dni = raw.dni ? raw.dni : undefined;
        usuario.username = raw.username ? raw.username: undefined;
        usuario.password = raw.password ? raw.password : undefined;
        return usuario;
    }
 
    static parseArray(raws: any): User[] {
        if (!raws || !raws.length) {
            return [];
        }
        return raws.map((raw: any) => User.parseItem(raw));
    }

}