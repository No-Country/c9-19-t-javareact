import { useState } from 'react';

// compoents
import TableStudentQualification from '../components/UI/TableStudentQualification';
import Loader from '../components/UI/Loader';
// UI
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function MyQualification() {
    
    const [loading, setLoading] = useState(false);
    const [subjects, setSubjects] = useState([
        {   id: 1, 
            teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'},
            subject_name: 'Lengua',
            qualifications: [
                {id: 1, numerical_qualification: 10, period_id: 1}, 
                {id: 2, numerical_qualification: 10, period_id: 2}, 
                {id: 3, numerical_qualification: 10, period_id: 3}
            ]
        },    
        {   id: 2, 
            teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'},
            subject_name: 'Matermática',
            qualifications: [
                {id: 3, numerical_qualification: 10, period_id: 1}, 
                {id: 4, numerical_qualification: 10, period_id: 2}, 
                {id: 5, numerical_qualification: 10, period_id: 3}
            ]
        },    
        {   id: 3, 
            teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'},
            subject_name: 'Inglés',
            qualifications: [
                {id: 6, numerical_qualification: 10, period_id: 1}, 
                {id: 7, numerical_qualification: 10, period_id: 2}, 
                {id: 8, numerical_qualification: 10, period_id: 3}
            ]
        },    
        {   id: 4, 
            teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'},
            subject_name: 'Ciencias Natuales',
            qualifications: [
                {id: 9, numerical_qualification: 10, period_id: 1}, 
                {id: 10, numerical_qualification: 10, period_id: 2}, 
                {id: 11, numerical_qualification: 10, period_id: 3}
            ]
        },   
    ]);

    return (
        <>
            <Container>
                <Row className="header">
                    <Col xs={12}>
                        <h3 className="header-title">Mis Calificaciones</h3>
                        <div className="header-line"></div>
                    </Col>
                    {/* <Col xs={3}>
                        <ButtonMain
                            text={'Agregar Comision'}
                            size="md"
                            icon="fa fa-add"
                            onClick={() => setShowFormUser(true)}
                        />
                    </Col> */}
                </Row>
                <Row>
                    <Container style={{padding: '0em 5em'}}>
                            <TableStudentQualification
                                subjects={subjects}
                            />
                        
                    </Container>
                </Row>
                <Loader show={loading}/>
            </Container>
        </>
    );
}

export default MyQualification;
