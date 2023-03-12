import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const LinkStudent = () => {
  return (
    <div className="list-group list-group-flush bg-blue" >
          <Nav.Link className="list-group-item list-group-item-action list-group-item p-3" as={Link} to={'/'} href="/"><i className="fa-solid fa-dashboard me-3"></i>Dashboard</Nav.Link>
          <Nav.Link className="list-group-item list-group-item-action list-group-item p-3" as={Link} to={'/my-qualifications'} href="/my-qualifications"><i className="fa-solid fa-th-list me-3"></i>Mis Calificaciones</Nav.Link>
    </div>
  )
}
