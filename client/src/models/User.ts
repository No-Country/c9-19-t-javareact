import { Qualification } from './Qualification';
export class User {
    id?: number | string;
    rol_id?: string;
    // rol: Rol
    token_id?: string;
    // token: Token
    comision_id?: string;
    // comision: Comision;
    name?: string;
    last_name?: string;
    dni?: number;
    username?: string;
    password?: string;
    qualifications?: Array<Qualification>;
    subjects?: Array<any>;

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
        usuario.qualifications = raw.qualifications ? raw.qualifications : undefined;
        usuario.subjects = raw.subjects ? raw.subjects : new Array<any>();
        return usuario;
    }
 
    static parseArray(raws: any): User[] {
        if (!raws || !raws.length) {
            return [];
        }
        return raws.map((raw: any) => User.parseItem(raw));
    }

}