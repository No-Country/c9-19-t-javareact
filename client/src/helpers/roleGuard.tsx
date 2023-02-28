import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Roles } from '../models';
import { RootState } from '../app/store';
import { PrivateRoutes } from '../routes';

interface Props {
  rol: Roles;
}

function RoleGuard({ rol }: Props) {
  const userState = useSelector((store: RootState) => store.user);
  console.log(userState.rol)
  return userState.rol === rol ? <Outlet /> :  <Navigate replace to={PrivateRoutes.DASHBOARD} /> ;
}
export default RoleGuard;
