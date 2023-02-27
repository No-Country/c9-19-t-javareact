
import { createUser } from '../app/states/user';
import { apiProps, useApi } from '../hooks/useApi';
import Swal from 'sweetalert2'

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
      dispatch(createUser(res.data))
    return res.data
      
  }
}
