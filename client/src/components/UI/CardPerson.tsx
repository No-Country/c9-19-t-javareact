import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { User } from '../../models/User';

interface Props {
  user: User | any;
  handleUpdateUsuario: (elem: any) => void;
}

const CardPerson: React.FC<Props> = ({
  user,
  handleUpdateUsuario,
}) => {
  return (
    <Card>
      <Card.Body className="text-center">
        <Card.Title>
          {user.name} {user.last_name}
        </Card.Title>
        <Card.Text>Rol</Card.Text>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup className="w-100">
          <Button variant="primary">
            <i className="fa fa-eye"></i>
          </Button>
          <Button variant="warning" onClick={() => handleUpdateUsuario(user)}>
            <i className="fa fa-edit"></i>
          </Button>
          <Button variant="danger">
            <i className="fa fa-trash"></i>
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};
export default CardPerson;
