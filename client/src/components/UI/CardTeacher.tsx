import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { User } from '../../models/User';

interface Props {
  teacher: User;
  handleUpdateTeacher: () => void;
  handleAddTeacher: () => void;
}

const CardTeacher: React.FC<Props> = ({
    teacher,
    handleUpdateTeacher,
    handleAddTeacher,
}) => {
  return (
    <Card>
      <Card.Body className="text-center">
        {
            teacher.id
            ?
            <Card.Title>            
                {teacher.name} {teacher.last_name}
            </Card.Title>
            :
            <Card.Title>            
                Sin profesor Asignado
            </Card.Title>
        }
      </Card.Body>
      <Card.Footer>
        <ButtonGroup className="w-100">
            {
                teacher.id 
                ?
                <Button variant="warnign" onClick={() => handleUpdateTeacher()}>
                    Modificar <i className="fa fa-edit"></i>
                </Button>
                :
                <Button variant="primary" onClick={() => handleAddTeacher()}>
                    Asignar <i className="fa fa-add"></i>
                </Button>
            } 
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};
export default CardTeacher;