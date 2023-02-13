import React, { useState ,useRef, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { sidebarStatus } from '../app/states/ui';
import { GoodLearner } from '../app/store';

export const SideNav = () => {

  const navigate = useNavigate();
  const useUI = useSelector((store: GoodLearner) => store.ui);
  const handleOnClick = (path: string) => {
    navigate(path, { replace: true });
  }

  return (
    <div className={` border-end bg-blue animate__animated animate__slideInLeft animate__delay-0.5s ${useUI.sidebarHidden ? (`sidebar-off`) :  (`sidebar-on`)}`} id="sidebar-wrapper" >
    <div className="sidebar-heading bg-red"><img src="https://media.discordapp.net/attachments/1071146886603489310/1072642125201674350/GoodLearner3.png" width="195" alt="" /></div>
    <div className="list-group list-group-flush bg-blue" >
        <NavLink className="list-group-item list-group-item-action list-group-item  p-3" to={'/'}><i className="fa-solid fa-dashboard me-3"></i>Dashboard</NavLink>
        <NavLink className="list-group-item list-group-item-action list-group-item  p-3" to={'/usuarios'}><i className="fa-solid fa-user me-3"></i>Usuarios</NavLink>
        {/* <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Overview</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Events</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Profile</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Status</a> */}
    </div>
    </div>
  )
}
