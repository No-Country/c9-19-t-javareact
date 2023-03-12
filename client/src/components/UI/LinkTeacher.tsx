import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
export const LinkTeacher = () => {
  return (
    <div className="list-group list-group-flush bg-blue" >
          <Nav.Link className="list-group-item list-group-item-action list-group-item p-3" as={Link} to={'/'} href="/"><i className="fa-solid fa-dashboard me-3"></i>Dashboard</Nav.Link>
          <Nav.Link className="list-group-item list-group-item-action list-group-item p-3" as={Link} to={'/my-commissions'}
          href="/my-commissions"><i className="fa-solid fa-th-list me-3"></i>Mis Comisiones</Nav.Link>
    </div>
  )
}
