import { Navigate, Outlet } from 'react-router-dom';
import { Roles } from '../models';
import { PublicRoutes } from '../routes';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../app/states/user';

interface Props {
  rol: Roles;
}

function RoleGuard({ rol }: Props) {
  const userState = useAppSelector(selectUser);
  return userState.rol === rol ? <Outlet /> :  <Navigate replace to={PublicRoutes.LOGIN} /> ;
}
export default RoleGuard;
