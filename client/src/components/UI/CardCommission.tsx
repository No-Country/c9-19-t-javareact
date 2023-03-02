import { Card } from 'react-bootstrap';
import { Commission } from '../../models/Commission';
import Badge from 'react-bootstrap/Badge';
import '../../styles/card-commission.css';
 
interface Props {
  commission: Commission;
  index: number;
  handleSelect: (value: Commission, value2: number) => void;
}

const CardCommission: React.FC<Props> = ({
  commission,
  index,
  handleSelect,
}) => {

  const handleSelectCard = () => {
    handleSelect(commission, index);
  }

  return (
    <Card onClick={handleSelectCard} className="card-commission">
      <Card.Header as="h5" className="card-commission-header">{commission.course }  - {commission.division}</Card.Header>
      <Card.Body className="text-center">
        <Card.Text>
          {/* {commission.students!.length} estudiantes */}          
          <Badge className="badge-main">
            30 estudiantes
          </Badge>{' '}
          <Badge className="badge-main">
            {commission.subjects?.length} Materias
          </Badge>{' '}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CardCommission;
