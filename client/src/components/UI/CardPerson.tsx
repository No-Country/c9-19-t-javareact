import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { User } from '../../models/User';

interface Props {
  user: User;
  handleUpdateUser: (elem: any) => void;
  handleShowRelations?: (user: User) => void;
}
const roles = ['Profesor', 'Tutor', 'Estudiante'];

const CardPerson: React.FC<Props> = ({
  user,
  handleUpdateUser,
  handleShowRelations
}) => {
  return (
    <Card>
      <Card.Body className="text-center">
        <Card.Title>
          {user.fullName} {user.last_name}
        </Card.Title>
        <Card.Text>{roles[user.rol_id ? Number(user.rol_id) - 1 : 0]}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup className="w-100">          
          <Button variant="primary" as={Link} to={`/usuario/${user.id}`} state={{ data: user }}>
            <i className="fa fa-eye"/>
          </Button>
          <Button variant="warning" onClick={() => handleUpdateUser(user)}>
            <i className="fa fa-edit"></i>
          </Button>
          {
           handleShowRelations
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
