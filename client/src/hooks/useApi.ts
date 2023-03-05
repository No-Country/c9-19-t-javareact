import axios, { AxiosRequestConfig } from 'axios';
import { getTokenFromLocalStorage } from '../helpers/localStorage';

export interface apiProps {
  token?: string;
  path?: string;
  method: string;
  body?: {};
}

const baseUrl =
  import.meta.env.VITE_BASE_URL_API || 'http://localhost:8080/api';

export const useApi = async ({ path, body, method }: apiProps) => {
  const token = getTokenFromLocalStorage();
  let finalUrl = `${baseUrl}/${path}`;
  let options: AxiosRequestConfig = {
    method: method,
    url: finalUrl,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
    data: body,
  };
  const response = await axios(options);
  return response;
};
