
import { loginUser } from '../app/states/user';
import { apiProps, useApi } from '../hooks/useApi';
import Swal from 'sweetalert2'
import { store } from '../app/store';
import { fetchUsers } from '../app/states/users';

export interface User{
  nombreUsuario?:string,
  clave?:string
}

export const loginService = (user:string,password:string) => {
  return async(dispatch:any) => {
    const apiPropertyes:apiProps = {
      token:'',
      path:'user/login',
      method:'post',
      body:{
        nombreUsuario:user,
        clave:password
      }
    };
    const res = await useApi(apiPropertyes)
    res.status !==200 ? 
      Swal.fire('Error','Usuario Incorrecto','error') : 
      dispatch(loginUser(res.data), store.dispatch(fetchUsers()))
    return 'error no manejado'
      
  }
}
