
import { useState } from 'react';
// Models
import { User } from '../models';
import { Commission } from '../models/Commission';
import { Subject } from '../models/Subject';

// Components
import CardStudent from '../components/UI/CardStudent';
import TableStudentQualification from '../components/UI/TableStudentQualification';
;
// UI
import '../styles/sub-header.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



function MyStudents() {
    const [showStudentQualification, setShowStudentQualification] = useState<boolean>(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [studentIndex, setStudentIndex] = useState(null);

    const [students, setStudents] = useState([
        {
            id: 2, rol_id: '3', name: 'Marcos', last_name: 'Ávila', dni: 12341456,
            subjects: [
                {   id: 1, 
                    teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'},
                    subject_name: 'Lengua',
                    qualifications: [
                        {id: 1, numberQualification: 10, period_id: 1}, 
                        {id: 2, numberQualification: 10, period_id: 2}, 
                        {id: 3, numberQualification: 10, period_id: 3}
                    ]
                },    
                {   id: 2, 
                    teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'},
                    subject_name: 'Matermática',
                    qualifications: [
                        {id: 3, numberQualification: 10, period_id: 1}, 
                        {id: 4, numberQualification: 10, period_id: 2}, 
                        {id: 5, numberQualification: 10, period_id: 3}
                    ]
                },    
                {   id: 3, 
                    teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'},
                    subject_name: 'Inglés',
                    qualifications: [
                        {id: 6, numberQualification: 10, period_id: 1}, 
                        {id: 7, numberQualification: 10, period_id: 2}, 
                        {id: 8, numberQualification: 10, period_id: 3}
                    ]
                },    
                {   id: 4, 
                    teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'},
                    subject_name: 'Ciencias Natuales',
                    qualifications: [
                        {id: 9, numberQualification: 10, period_id: 1}, 
                        {id: 10, numberQualification: 10, period_id: 2}, 
                        {id: 11, numberQualification: 10, period_id: 3}
                    ]
                }
            ]
        },
        {
            id: 3, rol_id: '3', name: 'Luciana', last_name: 'Ávila', dni: 12341456,
            subjects: []
        },
        {
            id: 4, rol_id: '3', name: 'Abigail', last_name: 'Ávila', dni: 12341456,
            subjects: []
        }
    ]);


    const handleSelectStudent = (data: any, index: any) => {
        // obtener detalle de comision
        setShowStudentQualification(true);
        setSelectedStudent(data);
        setStudentIndex(index);
    }

    const backToStudents = () => {
        setShowStudentQualification(false);
        setSelectedStudent(null);
        setStudentIndex(null);
    }

    return (
        <>
            <Container>
                <Row className="header">
                    <Col xs={12}>
                        <h3 className="header-title">Mis estudiantes a cargo</h3>
                        <div className="header-line"></div>
                    </Col>
                </Row>
                <Row>
                    <Container style={{padding: '0em 5em'}}>
                        {
                            !showStudentQualification
                            &&
                            <Row xs={1} md={2} lg={3} xl={4} className="g-2">
                                {students.map((student: any, index: number) => (
                                    <Col key={student.id}>
                                        <CardStudent
                                            student={student}
                                            index={index}
                                            handleSelect={handleSelectStudent}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        }
                        {
                            (showStudentQualification && selectedStudent)
                            &&
                            <Container>
                            <Row>
                                <Col xs={12} className="sub-header">
                                    <div style={{marginBottom: '2em'}}>
                                        <span> <strong> Materias del estudiante {selectedStudent.name} {selectedStudent.last_name} </strong></span>
                                        <Button variant="outline-secondary" style={{float: 'right'}} onClick={backToStudents}> <i className='fa fa-arrow-left'></i> Volver a mis estudiantes </Button>{' '}
                                    </div>
                                    <div className="sub-header-line"></div>
                                </Col>
                            </Row>
                            <TableStudentQualification
                                subjects={selectedStudent.subjects}
                            />
                        </Container>
                           
                        }
                    </Container>
                </Row>
            </Container>

        </>
      );
    }
    
    export default MyStudents;