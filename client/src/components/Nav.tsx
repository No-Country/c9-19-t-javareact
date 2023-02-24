import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import {  selectNavState, sidebarStatus } from '../app/states/ui';
import { resetUser, selectId, selectName, selectRol } from '../app/states/user';
import { clearLocalStorage } from '../helpers';
import { PrivateRoutes, PublicRoutes } from '../routes';



export const Nav = () => {
    const dispatch = useDispatch();
    const useUI = useAppSelector(selectNavState)
    const useName = useAppSelector(selectName)
    const useRol = useAppSelector(selectRol)
    const useId = useAppSelector(selectId)
    const sidebarToggle = () =>{
        dispatch(sidebarStatus())
    }
    const logout = () =>{
        clearLocalStorage('token')
        dispatch(resetUser())
    }
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm p-2 mb-4 bg-white rounded animate__animated animate__slideInDown animate__delay-0.5s">
            <div className="container-fluid">
                <div className="d-flex justify-content-start">
                <button className="btn bg-white me-4" id="sidebarToggle" onClick={sidebarToggle}><i className="fa-solid fa-bars fa-2xl"></i></button>
                <div className="input-group input-group-md">
                    <div className="input-group-prepend p-2">
                    {/* <i className="fa-solid fa-magnifying-glass fa-xl bg-grey"></i> */}

                        {/*  <span className="input-group-text" id="inputGroup-sizing-lg">🔎</span> */}
                    </div>
                    {/* <input type="text" className="form-control form-control-nav" placeholder="Busqueda" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/> */}
                </div>
                </div>
                 <span className="navbar-text float-start flex-grow-1">{useName} - {useRol}</span> 
                <div className="flex-shrink-0 dropdown">
                <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                </a>
                <ul className='dropdown-menu text-small shadow profiledropdown'>
                    <li><NavLink className="dropdown-item" to={`${PrivateRoutes.SINGLEUSERINFO}/${useId}`}>Opciones</NavLink></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><NavLink className="dropdown-item"onClick={logout} to={PublicRoutes.LOGIN}>Salir</NavLink></li>
                </ul>
                </div>
            </div>
        </nav>
  )
}
