
import { createUser } from '../app/states/user';
import { apiProps, useApi } from '../hooks/useApi';
import Swal from 'sweetalert2'
import { FormData } from '../components/LoginForm';

export const loginService = (formData: FormData) => {
  const {username, password} = formData
  return async(dispatch:any) => {
    const apiPropertyes:apiProps = {
      token:'',
      path:'user/login',
      method:'post',
      body:{
        nombreUsuario:username,
        clave:password
      }
    };
    const res = await useApi(apiPropertyes)
    res.status !==200 ? 
    
      
      Swal.fire('Error','Usuario Incorrecto','error')
       : 
      (
        localStorage.setItem('token',res.data.token),
        dispatch(createUser(res.data))
      )
    return 'error no manejado'
      
  }
}
