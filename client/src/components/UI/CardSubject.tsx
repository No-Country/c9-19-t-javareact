// Models
import { Subject } from '../../models/Subject';

// UI
import { Card } from 'react-bootstrap';
import '../../styles/card-subjects.css';

interface Props {
  subject: Subject;
  handleSelect: (value: Subject) => void;
}

const CardSubject: React.FC<Props> = ({
  subject,
  handleSelect,
}) => {

  const handleSelectCard = () => {
    handleSelect(subject);
  }

  return (
    
        <Card onClick={handleSelectCard} className="card-subject">
        <Card.Body className="text-center">
            <Card.Text>
                {subject.subjectName}        
            </Card.Text>
        </Card.Body>
        </Card>
    
  );
};
export default CardSubject;
