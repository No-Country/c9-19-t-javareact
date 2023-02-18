import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { createUser } from '../app/states/user';
import { apiProps, useApi } from '../hooks/useApi';
import { PrivateRoutes } from '../models';
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
    console.log(res)
    res.status !==200 ? Swal.fire('Error','Usuario Incorrecto','error'): dispatch(createUser(res.data))


    return 'error no manejado'
      
  }
}
