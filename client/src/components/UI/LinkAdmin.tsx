
import { Accordion, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const LinkAdmin = () => {
  return (
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
  )
}
