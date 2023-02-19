import React from 'react'
import { Container,Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  sidebarStatus } from '../app/states/ui';
import { resetUser } from '../app/states/user';
import { GoodLearner } from '../app/store';
import { SideNav } from './SideNav';


export const TopNav = () => {
    const dispatch = useDispatch();
    const useUI = useSelector((store:GoodLearner)=>store.ui)
    const sidebarToggle = () =>{
        dispatch(sidebarStatus())
    }
    const logout = () =>{
        dispatch(resetUser())
    }
  return (
        <Navbar expand={'sm'} collapseOnSelect className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm mb-4 bg-white rounded animate__animated animate__slideInDown animate__delay-0.5s p-0">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
          <Navbar.Offcanvas className={"position-absolute"}
            id={`offcanvasNavbar-expand-${'sm'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
            placement="start"
            style={{ width: 'fit-content', border: 'none',background:"transparent" }}
          >
            <SideNav />
          </Navbar.Offcanvas>
          <Nav className="justify-content-end flex-grow-1 flex-row">
            <NavDropdown
              title={
                <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"    width="32" height="32"
                  className="rounded-circle"
                  alt="Current user"
                  loading="lazy"
                />
              }
              id={`offcanvasNavbarDropdown-expand-${'sm'}`}
            >
                <NavDropdown.Item
                  as={Link}
                  to={'/login'}
                  onClick={logout}
                >
                  Cerrar sesión
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => console.log("settings")}
                disabled={false}
                href="#"
              >
                Ajustes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
  )
}
