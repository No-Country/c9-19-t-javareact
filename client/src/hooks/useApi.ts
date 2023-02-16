import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';

export interface apiProps{
    token?:string;
    path?:string;
    method:string;
    data?:{}
}

const baseUrl= 'http://localhost:8080/api';


export const useApi = async({token,path,data,method = 'GET'}:apiProps) => {
    let config = `${token ? { } : ''}`;
    let finalUrl = `${ baseUrl }/${ path }`;
    let options: AxiosRequestConfig = {
      method: method,
      url: finalUrl,
      headers:{ 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Origin':'/*'

       /*  Authorization:`bearer ${token}` */
      },
      data:{
        nombreUsuario:'Cristian',
        password:'123'
      }
    }
   await axios(options)    
    .then(res=> console.log(res))
    .catch(err=> console.log(err))


  return baseUrl;
}
