import axios, { AxiosRequestConfig } from 'axios';

export interface apiProps{
    token?:string;
    path?:string;
    method:string;
    body?:{}
}

const baseUrl= 'http://localhost:8080/api';


export const useApi = async({token,path,body,method = 'GET'}:apiProps) => {
    let config = `${token ? { } : ''}`;
    let finalUrl = `${ baseUrl }/${ path }`;
    let options: AxiosRequestConfig = {
      method: method,
      url: finalUrl,
      headers:{ 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*' ,
         Authorization:`bearer ${token}` 
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
