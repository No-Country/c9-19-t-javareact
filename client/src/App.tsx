import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Usuarios from "./pages/Usuarios";
import { RoutesWithNotFound } from './helpers';
import { PrivateRoutes, PublicRoutes, Roles } from './models';
import AuthGuard from './helpers/authGuard';
import RoleGuard from './helpers/roleGuard';

function App() {

  return (
    <BrowserRouter>
      <RoutesWithNotFound>
            {/* <Route path="/" element={<Navigate to={PrivateRoutes.USER} />} /> */}
              <Route path={`/${PublicRoutes.LOGIN}`} element={<Login />} />
               <Route element={<AuthGuard privateValidation={true} />}> 
                <Route path={`/`} element={<Layout />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                <Route path={PrivateRoutes.USER} element={<Usuarios />} />
                 </Route> 
              </Route>
               <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.COMMISSION} element={<h1>Role admin</h1>} />
              </Route> 
        
   {/*        <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/usuarios" element={<Usuarios />} />
            <Route index element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
          </Route> */}
        
        </RoutesWithNotFound>
    </BrowserRouter>
  );
}

export default App;
