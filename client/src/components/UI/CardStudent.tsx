import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { User } from '../../models/User';

interface Props {
  student: User
  handleSelect: (value: User, value2: number) => void;
  index: number;
}

const CardStudent: React.FC<Props> = ({
  student,
  index,
  handleSelect
}) => {

  const handleSelectCard = () => {
    handleSelect(student, index);
  }

  return (
    <Card onClick={handleSelectCard} className="card-commission">
      <Card.Header as="h5" className="card-commission-header">{student.name } {student.last_name}</Card.Header>
      <Card.Body className="text-center">
        <Card.Text>
          {/* {commission.students!.length} estudiantes */}          
          {/* <Badge className="badge-main">
            30 estudiantes
          </Badge>{' '}
          <Badge className="badge-main">
            15 Materias
          </Badge>{' '} */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CardStudent;