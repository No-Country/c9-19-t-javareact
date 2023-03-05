import { removeTokenFromLocalStorage } from "../helpers";
import { apiProps, useApi } from "../hooks/useApi";

export const checkTokenValidaty = async () => {
  const apiPropertyes: apiProps = {
    path: `user/area/usuario-logueado`,
    method: 'get',
  };
  try {
    const response = await useApi(apiPropertyes);
    return response.status === 200
  } catch (error) {
    console.log(error)
    removeTokenFromLocalStorage()
    return false
  }
};


