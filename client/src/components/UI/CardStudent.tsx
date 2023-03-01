import { Card, Badge, ButtonGroup } from 'react-bootstrap';
import { Student } from '../../models/Student';

interface Props {
  student: Student
  handleSelect: (value: Student) => void;
}

const CardStudent: React.FC<Props> = ({
  student,
  handleSelect
}) => {

  const handleSelectCard = () => {
    handleSelect(student);
  }

  return (
    <Card onClick={handleSelectCard} className="card-commission">
      <Card.Header as="h5" className="card-commission-header">{student.firstName } {student.lastName}</Card.Header>
      <Card.Body className="text-center">
        <Card.Text>
          {/* {commission.students!.length} estudiantes */}          
          <Badge className="badge-main">
            15 Materias
          </Badge>{' '}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CardStudent;