import { Accordion, Nav } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from '../app/hooks';
import { selectRol } from '../app/states/user';
export const SideNav = () => {

  const useRol = useAppSelector(selectRol)

  return (
    <div className="bg-blue sidebar-on animate__animated animate__slideInLeft animate__delay-0.5s" id="sidebar-wrapper" >
      <div className="sidebar-heading bg-red"><img src="https://media.discordapp.net/attachments/1071146886603489310/1072642125201674350/GoodLearner3.png" width="195" alt="" /></div>

      { useRol ==='ADMINISTRATOR' ? (
              <Nav className="list-group list-group-flush bg-blue d-flex flex-column" >
        <Nav.Link className="list-group-item list-group-item-action list-group-item p-3" as={Link} to={'/'} href="/"><i className="fa-solid fa-dashboard me-3"></i>Dashboard</Nav.Link>
        <Accordion flush style={{ color: "white", background: "inherit" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header><i className="fa-solid fa-user-graduate me-3"></i>Estudiantes</Accordion.Header>
            <Accordion.Body className="p-0">
              <Nav.Link className="list-group-sub-item list-group-item-action list-group-item p-3" as={Link} to={'/agregar-usuario'} href="/agregar-estudiante" state={{ user: "estudiante" }} > <i className="fa-thin fa-greater-than me-3"></i>Añadir estudiante</Nav.Link>
              <Nav.Link className="list-group-sub-item list-group-item-action list-group-item p-3" as={Link} to={'/estudiantes'} href="/estudiantes"><i className="fa-thin fa-greater-than me-3"></i>Todos los estudiantes</Nav.Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><i className="fa-solid fa-users me-3"></i>Tutores</Accordion.Header>
            <Accordion.Body className="p-0">
              <Nav.Link className="list-group-sub-item list-group-item-action list-group-item p-3" as={Link} to={'/agregar-usuario'} href="/agregar-tutor" state={{ user: "tutor" }} > <i className="fa-thin fa-greater-than me-3"></i>Añadir tutor</Nav.Link>
              <Nav.Link className="list-group-sub-item list-group-item-action list-group-item p-3" as={Link} to={'/tutores'} href="/tutores"><i className="fa-thin fa-greater-than me-3"></i>Todos los tutores</Nav.Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><i className="fa-solid fa-user-tie me-3"></i>Profesores</Accordion.Header>
            <Accordion.Body className="p-0">
              <Nav.Link className="list-group-sub-item list-group-item-action list-group-item p-3" as={Link} to={'/agregar-usuario'} href="/agregar-profesor" state={{ user: "profesor" }} > <i className="fa-thin fa-greater-than me-3"></i>Añadir profesor</Nav.Link>
              <Nav.Link className="list-group-sub-item list-group-item-action list-group-item p-3" as={Link} to={'/profesores'} href="/profesores"> <i className="fa-thin fa-greater-than me-3"></i>Todos los profesores</Nav.Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Nav.Link className="list-group-item list-group-item-action list-group-item p-3" as={Link} to={'/commission'} href="/commission"><i className="fa-solid fa-th-list me-3"></i>Comisiones</Nav.Link>
        </Nav>
      ) : (
        useRol ==='TEACHER' ? 
       ( <div className="list-group list-group-flush bg-blue" >
          <Nav.Link className="list-group-item list-group-item-action list-group-item p-3" as={Link} to={'/'} href="/"><i className="fa-solid fa-dashboard me-3"></i>Dashboard</Nav.Link>
{/*           <Accordion flush style={{ color: "white", background: "inherit" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header><i className="fa-solid fa-user-graduate me-3"></i>Estudiantes</Accordion.Header>
              <Accordion.Body className="p-0">
                <Nav.Link className="list-group-sub-item list-group-item-action list-group-item p-3" as={Link} to={'/agregar-usuario'} href="/agregar-estudiante" state={{ user: "estudiante" }}> <i className="fa-thin fa-greater-than me-3"></i>Calificar Estudiante</Nav.Link>
                <Nav.Link className="list-group-sub-item list-group-item-action list-group-item p-3" as={Link} to={'/estudiantes'} href="/estudiantes"><i className="fa-thin fa-greater-than me-3"></i>Todos mis estudiantes</Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}
          <Nav.Link className="list-group-item list-group-item-action list-group-item p-3" as={Link} to={'/my-commissions'}
          href="/my-commissions"><i className="fa-solid fa-th-list me-3"></i>Mis Comisiones</Nav.Link>
        </div>
       ) : 
       useRol ==='STUDENT' ? 
       ( <div className="list-group list-group-flush bg-blue" >
          <Nav.Link className="list-group-item list-group-item-action list-group-item p-3" as={Link} to={'/'} href="/"><i className="fa-solid fa-dashboard me-3"></i>Dashboard</Nav.Link>
          <Nav.Link className="list-group-item list-group-item-action list-group-item p-3" as={Link} to={'/my-qualifications'} href="/my-qualifications"><i className="fa-solid fa-th-list me-3"></i>Mis Calificaciones</Nav.Link>
        </div>
       )
       : 
       ( <div className="list-group list-group-flush bg-blue" >
          <Nav.Link className="list-group-item list-group-item-action list-group-item p-3" as={Link} to={'/'} href="/"><i className="fa-solid fa-dashboard me-3"></i>Dashboard</Nav.Link>
          <Nav.Link className="list-group-item list-group-item-action list-group-item p-3" as={Link} to={'/my-students'} href="/my-students"><i className="fa-solid fa-graduation-cap me-3"></i>Mis Estudiantes</Nav.Link>
        </div>
       )
      )}
      </div>
  )
}
