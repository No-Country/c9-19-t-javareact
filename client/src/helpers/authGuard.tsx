import { Navigate, Outlet } from 'react-router-dom';
import {  PublicRoutes } from '../routes';
import { useAppSelector } from '../app/hooks';
import { selectToken } from '../app/states/user';
import { checkTokenValidaty } from '../services/tokenValidation';
import { useEffect, useState } from 'react';
import { getTokenFromLocalStorage } from './localStorage';

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PublicRoutes.LOGIN} />;

const AuthGuard: React.FC<Props> = ({ privateValidation }) => {
  const userIsLogged = useAppSelector(selectToken);
  const tokenIsStored = getTokenFromLocalStorage()
  const [tokenIsValid, setTokenIsValid] = useState<boolean>();

  useEffect(() => {
    const checkToken = async () => {
      const isValid = await checkTokenValidaty();
      setTokenIsValid(isValid);
    };
    checkToken();
  }, []);

  console.log(tokenIsValid)

  if (typeof tokenIsValid === 'undefined') {
    return null; // or render a loading indicator
  }

  return userIsLogged && tokenIsStored && tokenIsValid && privateValidation ? (
    PrivateValidationFragment
  ) : (
    PublicValidationFragment
  );
};

export default AuthGuard;