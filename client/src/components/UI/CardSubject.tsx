// Models
import { Subject } from '../../models/Subject';

// UI
import { Card } from 'react-bootstrap';
import '../../styles/card-subjects.css';

interface Props {
  subject: Subject;
  handleSelect: (value: Subject, value2: number) => void;
  index: number;
}

const CardSubject: React.FC<Props> = ({
  subject,
  handleSelect,
  index,
}) => {

  const handleSelectCard = () => {
    handleSelect(subject, index);
  }

  return (
    
        <Card onClick={handleSelectCard} className="card-subject">
        <Card.Body className="text-center">
            <Card.Text>
                {subject.subject_name}        
            </Card.Text>
        </Card.Body>
        </Card>
    
  );
};
export default CardSubject;
