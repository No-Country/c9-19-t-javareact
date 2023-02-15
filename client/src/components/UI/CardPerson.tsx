import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { User } from '../../models/User';

interface Props {
  user: User;
  handleUpdateUser: (elem: any) => void;
  handleDeleteUser: (elem: any) => void;
  handleShowRelations: (user: User) => void;
}
const roles = ['Profesor', 'Tutor', 'Estudiante'];

const CardPerson: React.FC<Props> = ({
  user,
  handleUpdateUser,
  handleDeleteUser,
  handleShowRelations
}) => {
  return (
    <Card>
      <Card.Body className="text-center">
        <Card.Title>
          {user.name} {user.last_name}
        </Card.Title>
        <Card.Text>{roles[user.rol_id ? Number(user.rol_id) - 1 : 0]}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup className="w-100">
          <Button variant="primary" as={Link} to={`/usuario/${user.id}`} state={{ data: user }}>
            <i className="fa fa-eye"></i>
          </Button>
          <Button variant="warning" onClick={() => handleUpdateUser(user)}>
            <i className="fa fa-edit"></i>
          </Button>
          <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>
            <i className="fa fa-trash"></i>
          </Button>
          {
            (user.rol_id === '2' || user.rol_id === '3')
            &&
            <Button variant="info" onClick={() => handleShowRelations(user)}>
              <i className="fa fa-sitemap"></i>
            </Button>
          }

        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};
export default CardPerson;
