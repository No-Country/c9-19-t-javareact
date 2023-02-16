import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Usuarios from "./pages/Usuarios";
import Commissions from './pages/Commissions';
import MyCommissions from './pages/MyCommissions';
import { RoutesWithNotFound } from './helpers';
import { PrivateRoutes, PublicRoutes, Roles } from './models';
import AuthGuard from './helpers/authGuard';
import RoleGuard from './helpers/roleGuard';

function App() {

  return (
    <BrowserRouter>
      <RoutesWithNotFound>
              <Route path={`/${PublicRoutes.LOGIN}`} element={<Login />} />
              <Route element={<AuthGuard privateValidation={true} />}> 
                  <Route path={`/`} element={<Layout />}>
                    <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                    <Route path={PrivateRoutes.USER} element={<Usuarios />} />
                    <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                        <Route path={PrivateRoutes.COMMISSION} element={<Commissions/>} />
                    </Route>
                    <Route element={<RoleGuard rol={Roles.TEACHER} />}>
                        <Route path={PrivateRoutes.MY_COMMISSIONS} element={<MyCommissions/>} />
                    </Route>  
                  </Route> 
              </Route>

        </RoutesWithNotFound>
    </BrowserRouter>
  );
}

export default App;
