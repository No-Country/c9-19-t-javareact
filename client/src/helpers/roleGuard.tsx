import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes, Roles } from '../models';
import { GoodLearner } from '../app/store';

interface Props {
  rol: Roles;
}

function RoleGuard({ rol }: Props) {
  const userState = useSelector((store: GoodLearner) => store.user);
  console.log(userState.rol_id)
  return userState.rol_id === rol ? <Outlet /> :  <Navigate replace to={PrivateRoutes.USER} /> ;
}
export default RoleGuard;
