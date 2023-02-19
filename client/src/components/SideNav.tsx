import { Accordion, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { sidebarStatus } from '../app/states/ui';
import { GoodLearner } from '../app/store';

export const SideNav = () => {

  const navigate = useNavigate();
  const useUI = useSelector((store: GoodLearner) => store.ui);
  const handleOnClick = (path: string) => {
    navigate(path, { replace: true });
  }

  return (
    <div className={"bg-blue sidebar-on animate__animated animate__slideInLeft animate__delay-0.5s"} id="sidebar-wrapper" >
      <div className="sidebar-heading bg-red"><img src="https://media.discordapp.net/attachments/1071146886603489310/1072642125201674350/GoodLearner3.png" width="195" alt="" /></div>
      <Nav className="list-group list-group-flush bg-blue d-flex flex-column" >
        <Nav.Link className="list-group-item list-group-item-action list-group-item  p-3" as={Link} to={'/dashboard'} href='/dashboard'><i className="fa-solid fa-dashboard me-3"></i>Dashboard</Nav.Link>
        <Accordion flush style={{ color: "white", background: "inherit" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header><i className="fa-solid fa-user-graduate me-3"></i>Estudiantes</Accordion.Header>
            <Accordion.Body className="p-0">
              <Nav.Link className="list-group-sub-item list-group-item-action list-group-item  p-3" as={Link} to={'/agregar-usuario'} state={{ user: "estudiante" }} href='/agregar-estudiante'> <i className="fa-thin fa-greater-than me-3"></i>Añadir estudiante</Nav.Link>
              <Nav.Link className="list-group-sub-item list-group-item-action list-group-item  p-3" as={Link} to={'/estudiantes'} href="/estudiantes" ><i className="fa-thin fa-greater-than me-3"></i>Todos los estudiantes</Nav.Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><i className="fa-solid fa-users me-3"></i>Tutores</Accordion.Header>
            <Accordion.Body className="p-0">
              <Nav.Link className="list-group-sub-item list-group-item-action list-group-item  p-3" as={Link} to={'/agregar-usuario'} state={{ user: "tutor" }} href="/agregar-tutor" > <i className="fa-thin fa-greater-than me-3"></i>Añadir tutor</Nav.Link>
              <Nav.Link className="list-group-sub-item list-group-item-action list-group-item  p-3" as={Link} to={'/tutores'} href="/tutores"><i className="fa-thin fa-greater-than me-3"></i>Todos los tutores</Nav.Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><i className="fa-solid fa-user-tie me-3"></i>Profesores</Accordion.Header>
            <Accordion.Body className="p-0">
              <Nav.Link className="list-group-sub-item list-group-item-action list-group-item  p-3" as={Link} to={'/agregar-usuario'} state={{ user: "profesor" }} href="/agregar-profesor"> <i className="fa-thin fa-greater-than me-3"></i>Añadir profesor</Nav.Link>
              <Nav.Link className="list-group-sub-item list-group-item-action list-group-item  p-3" as={Link} to={'/profesores'} href="/profesores"> <i className="fa-thin fa-greater-than me-3"></i>Todos los profesores</Nav.Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Nav.Link className="list-group-item list-group-item-action list-group-item  p-3" as={Link} to={'/commission'} href="/commission"><i className="fa-solid fa-th-list me-3"></i>Comisiones</Nav.Link>
        <Nav.Link className="list-group-item list-group-item-action list-group-item  p-3" as={Link} to={'/my-commissions'} href="/my-comissions"><i className="fa-solid fa-th-list me-3"></i>Mis Comisiones</Nav.Link>
        {/* <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Overview</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Events</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Profile</a>
        <a className="list-group-item list-group-item-action list-group-item  p-3" href="#!"><i className="fa-solid fa-user me-3"></i>Status</a> */}
      </Nav>
    </div >
  )
}
