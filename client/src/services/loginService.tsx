
import { createUser } from '../app/states/user';
import { apiProps, useApi } from '../hooks/useApi';
import { FormData } from '../components/LoginForm';
import { setTokenToLocalStorage } from '../helpers';

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
    try {
      const res = await useApi(apiPropertyes)
      if(res.status === 200) {
        setTokenToLocalStorage(res.data.token)
        dispatch(createUser(res.data))
        return res.data
      } else {
        console.log(res, "Error desconocido")
      }
    } catch(error) {
      console.log(error)
    }
  }
}
