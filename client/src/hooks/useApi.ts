import axios, { AxiosRequestConfig } from 'axios';
import { getTokenFromLocalStorage } from '../helpers/localStorage';

export interface apiProps{
    token?:string;
    path?:string;
    method:string;
    body?:{}
}

const baseUrl= 'http://localhost:8080/api';

export const useApi = async({path,body,method}:apiProps) => {
  const token = getTokenFromLocalStorage()
    let finalUrl = `${ baseUrl }/${ path }`;
    let options: AxiosRequestConfig = {
      method: method,
      url: finalUrl,
      headers:{ 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*' ,
        Authorization:`Bearer ${token}` 
      },
      data:body
    }

   try {
    const res = await axios(options)
    return {
      status:res.status,
      data:res.data
    }
   } catch (error) {
    console.log(error)
    return {
      status:401,
      message:'Credenciales incorrectas o expiradas'}
   }
}
