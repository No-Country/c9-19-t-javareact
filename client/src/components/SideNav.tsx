import React, { useState, useRef, useEffect } from 'react'
import { Accordion } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { useAppSelector } from '../app/hooks';
import { sidebarStatus } from '../app/states/ui';
import { selectId, selectRol } from '../app/states/user';
import { GoodLearner } from '../app/store';

export const SideNav = () => {

  const navigate = useNavigate();
  const useUI = useSelector((store: GoodLearner) => store.ui);
  const useRol = useAppSelector(selectRol)
  const useId = useAppSelector(selectId)
  
  const handleOnClick = (path: string) => {
    navigate(path, { replace: true });
  }

  return (
    <div className={` border-end bg-blue animate__animated animate__slideInLeft animate__delay-0.5s ${useUI.sidebarHidden ? (`sidebar-off`) : (`sidebar-on`)}`} id="sidebar-wrapper" >
      <div className="sidebar-heading bg-red"><img src="https://media.discordapp.net/attachments/1071146886603489310/1072642125201674350/GoodLearner3.png" width="195" alt="" /></div>

      { useRol ==='ADMINISTRATOR' ? (
              <div className="list-group list-group-flush bg-blue" >
        <NavLink className="list-group-item list-group-item-action list-group-item  p-3" to={'/dashboard'}><i className="fa-solid fa-dashboard me-3"></i>Dashboard</NavLink>
        <Accordion flush style={{ color: "white", background: "inherit" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header><i className="fa-solid fa-user-graduate me-3"></i>Estudiantes</Accordion.Header>
            <Accordion.Body className="p-0">
              <NavLink className="list-group-sub-item list-group-item-action list-group-item  p-3" to={'/agregar-usuario'} state={{ user: "estudiante" }} > <i className="fa-thin fa-greater-than me-3"></i>Añadir estudiante</NavLink>
              <NavLink className="list-group-sub-item list-group-item-action list-group-item  p-3" to={'/estudiantes'}><i className="fa-thin fa-greater-than me-3"></i>Todos los estudiantes</NavLink>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><i className="fa-solid fa-users me-3"></i>Tutores</Accordion.Header>
            <Accordion.Body className="p-0">
              <NavLink className="list-group-sub-item list-group-item-action list-group-item  p-3" to={'/agregar-usuario'} state={{ user: "tutor" }} > <i className="fa-thin fa-greater-than me-3"></i>Añadir tutor</NavLink>
              <NavLink className="list-group-sub-item list-group-item-action list-group-item  p-3" to={'/tutores'}><i className="fa-thin fa-greater-than me-3"></i>Todos los tutores</NavLink>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><i className="fa-solid fa-user-tie me-3"></i>Profesores</Accordion.Header>
            <Accordion.Body className="p-0">
              <NavLink className="list-group-sub-item list-group-item-action list-group-item  p-3" to={'/agregar-usuario'} state={{ user: "profesor" }} > <i className="fa-thin fa-greater-than me-3"></i>Añadir profesor</NavLink>
              <NavLink className="list-group-sub-item list-group-item-action list-group-item  p-3" to={'/profesores'}> <i className="fa-thin fa-greater-than me-3"></i>Todos los profesores</NavLink>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <NavLink className="list-group-item list-group-item-action list-group-item  p-3" to={'/commission'}><i className="fa-solid fa-th-list me-3"></i>Comisiones</NavLink>
        <NavLink className="list-group-item list-group-item-action list-group-item  p-3" to={'/my-commissions'}><i className="fa-solid fa-th-list me-3"></i>Mis Comisiones</NavLink>
        </div>
      ) : (
        useRol ==='TEACHER' ? 
       ( <div className="list-group list-group-flush bg-blue" >
          <NavLink className="list-group-item list-group-item-action list-group-item  p-3" to={'/dashboard'}><i className="fa-solid fa-dashboard me-3"></i>Dashboard</NavLink>
{/*           <Accordion flush style={{ color: "white", background: "inherit" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header><i className="fa-solid fa-user-graduate me-3"></i>Estudiantes</Accordion.Header>
              <Accordion.Body className="p-0">
                <NavLink className="list-group-sub-item list-group-item-action list-group-item  p-3" to={'/agregar-usuario'} state={{ user: "estudiante" }} > <i className="fa-thin fa-greater-than me-3"></i>Calificar Estudiante</NavLink>
                <NavLink className="list-group-sub-item list-group-item-action list-group-item  p-3" to={'/estudiantes'}><i className="fa-thin fa-greater-than me-3"></i>Todos mis estudiantes</NavLink>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}
          <NavLink className="list-group-item list-group-item-action list-group-item  p-3" to={'/my-commissions'}><i className="fa-solid fa-th-list me-3"></i>Mis Comisiones</NavLink>
        </div>
       ) : (
        <div className="list-group list-group-flush bg-blue" >
        <NavLink className="list-group-item list-group-item-action list-group-item  p-3" to={'/dashboard'}><i className="fa-solid fa-dashboard me-3"></i>Dashboard</NavLink>
        </div>
       
      ))}


        {/* <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Overview</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Events</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Profile</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Status</a> */}
      </div>
  )
}
