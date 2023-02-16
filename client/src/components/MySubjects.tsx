
// Models
import { Commission } from '../models/Commission';
import { Subject } from '../models/Subject';

// Components
import CardSubject from './UI/CardSubject';
;
// UI
import '../styles/sub-header.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export interface Props {
    commission: Commission;
    subjects: Array<Subject>;
    handleSelect: (value: Subject, value2: number) => void;
    backToCommissions: () => void; 
}


function MySubjects({
    commission,
    subjects,
    handleSelect,
    backToCommissions,
    }: Props) {
    
    return (
        <>
        <Container>
        <Row>
            <Col xs={12} className="sub-header">
                <div style={{marginBottom: '2em'}}>
                    <span> <strong> Materias de la comisión {commission.course} - {commission.division} </strong></span>
                    <Button variant="outline-secondary" style={{float: 'right'}} onClick={backToCommissions}> <i className='fa fa-arrow-left'></i> Volver a comisiones </Button>{' '}
                </div>
                <div className="sub-header-line"></div>
            </Col>
        </Row>
       <Row xs={1} md={2} lg={3} xl={4} className="g-2 mt-2">
            {subjects.map((subject: any, index: number) => (
                <Col key={subject.id}>
                    <CardSubject
                        subject={subject}
                        index={index}
                        handleSelect={handleSelect}
                    />
                </Col>
            ))}
        </Row>
    </Container>

        </>
      );
    }
    
    export default MySubjects;