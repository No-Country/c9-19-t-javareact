import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { useAppDispatch } from '../../app/hooks';
import { setSelectedPerson } from '../../app/states/SelectedPerson';
import { handleShowInfoModal } from '../../app/states/ui';
import { User } from '../../models';
import { Person } from '../../models/Person';

interface Props {
  user: Person;
  handleUpdateUser: (elem: any) => void;
  handleShowRelations?: (user: User) => void;
}

const CardPerson: React.FC<Props> = ({
  user,
  handleUpdateUser,
  handleShowRelations
}) => {

  const dispatch = useAppDispatch()

  return (
    <Card>
      <Card.Body className="text-center">
        <Card.Title>
          {user.fullName}
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup className="w-100" onClick={() => dispatch(setSelectedPerson(user))}>          
          <Button variant="primary" onClick={() => dispatch(handleShowInfoModal())}>
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
