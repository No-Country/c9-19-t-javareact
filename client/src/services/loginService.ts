import React from 'react'
import { apiProps, useApi } from '../hooks/useApi';

export interface user{
  nombreUsuario?:'',
  clave?:''
}

export const loginService = (user:string,password:string) => {
  const apiPropertyes:apiProps = {token:'',path:'user/login',method:'post',data:{nombreUsuario:user,clave:password}};
  const res = useApi(apiPropertyes);
  return 'asdasd'
}
