import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { User } from '../../models/User';

interface Props {
  user: User;
  handleUpdateUser: (elem: any) => void;
  handleDeleteUser: (elem: any) => void;
}

const CardPerson: React.FC<Props> = ({
  user,
  handleUpdateUser,
  handleDeleteUser
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
          <Button variant="warning" onClick={() => handleUpdateUser(user)}>
            <i className="fa fa-edit"></i>
          </Button>
          <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>
            <i className="fa fa-trash"></i>
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};
export default CardPerson;
