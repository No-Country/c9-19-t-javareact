
import { useState, useEffect } from 'react';
// Models
import { Subject } from '../models/Subject';
import { User } from '../models/User';
// Components
import TableQualification from './UI/TableQualification';
import QualificationAssign from './QualificationAssign';
// UI
import '../styles/sub-header.css';
import '../styles/tabs.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Qualification } from '../models/Qualification';

export interface Props {
    subject: Subject;
    backToSubjects: () => void;
}


function SubjectDetails({
    subject, 
    backToSubjects
}: Props) {
    
    const [selectedStudent, setSelectedStudent] = useState<User>(new User());
    const [studentindex, setStudentindex] = useState<any>(null);
    const [selectedQualification, setSelectedQualification] = useState<any>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    const [users, setUsers] = useState([
        {id: 1, rol_id: '3', name: 'Juan', last_name: 'Guzmán', dni: 12341456,
            qualifications: [
                // {id: 1, numerical_qualification: 7, period_id: 1}, 
                // {id: 2, numerical_qualification: 8, period_id: 2}, 
                // {id: 3, numerical_qualification: 9, period_id: 3},             
            ]
        },
        {id: 2, rol_id: '3', name: 'Marcos', last_name: 'Díaz', dni: 12341456,
            qualifications: [
                {id: 3, numerical_qualification: 10, period_id: 1}, 
                {id: 4, numerical_qualification: 10, period_id: 2}, 
                {id: 5, numerical_qualification: 10, period_id: 3},             
            ]
        },
        {id: 3, rol_id: '3', name: 'Luciana', last_name: 'Acosta', dni: 12341456,
            qualifications: [
                {id: 4, numerical_qualification: 5, period_id: 1}, 
                {id: 5, numerical_qualification: 6, period_id: 2}, 
                {id: 6, numerical_qualification: 7, period_id: 3},             
            ]
        },
        {id: 4, rol_id: '3', name: 'Abigail', last_name: 'Ávila', dni: 12341456,
            qualifications: [
                {id: 7, numerical_qualification: 2, period_id: 1}, 
                {id: 8, numerical_qualification: 6, period_id: 2}, 
                {id: 9, numerical_qualification: 5, period_id: 3},             
            ]
        },
        {id: 5, rol_id: '3', name: 'Romina', last_name: 'Pérez', dni: 12341456,
            qualifications: [
                {id: 10, numerical_qualification: 7, period_id: 1}, 
                {id: 11, numerical_qualification: 7, period_id: 2}, 
                {id: 12, numerical_qualification: 7, period_id: 3},             
            ]
        },
        {id: 6, rol_id: '3', name: 'Esteban', last_name: 'Díaz', dni: 12341456,
            qualifications: [
                {id: 13, numerical_qualification: 5, period_id: 1}, 
                {id: 14, numerical_qualification: 7, period_id: 2}, 
                {id: 15, numerical_qualification: 8, period_id: 3},             
            ]
        },
        {id: 7, rol_id: '3', name: 'Mariel', last_name: 'Caro', dni: 12341456, 
            qualifications: [
                {id: 16, numerical_qualification: 9, period_id: 1}, 
                {id: 17, numerical_qualification: 10, period_id: 2}, 
                {id: 18, numerical_qualification: 8, period_id: 3},             
            ]
        },
        {id: 8, rol_id: '3', name: 'Virginia', last_name: 'Sanchez', dni: 12341456,
            qualifications: [
                {id: 19, numerical_qualification: 5, period_id: 1}, 
                {id: 20, numerical_qualification: 2, period_id: 2}, 
                {id: 21, numerical_qualification: 3, period_id: 3},             
            ]
        },    
    ]);


    const handleCancelModal = () => {
        setStudentindex(null);
        setSelectedStudent(new User());
        setSelectedQualification(null);
        setShowModal(false);
    }

    
    const handleSaveQualification = (value: number) => {
        let index = users[studentindex].qualifications.findIndex( q => q.period_id && q.period_id === selectedQualification.period_id) 
        if (index !== -1) {
            users[studentindex].qualifications[index].numerical_qualification = Number(value);
        } else {
            users[studentindex].qualifications.push(
                {id: new Date().getTime(), numerical_qualification: Number(value), period_id: selectedQualification.period_id}
            );
        }
        setShowModal(false);
    }

    return (
        <>
        <Container>
            <Row>
                <Col xs={12} className="sub-header">
                    <div style={{marginBottom: '2em'}}>
                        <span> <strong> {subject.subject_name} </strong>
                        {/* <Badge pill bg="warning" text="dark">
                                <i className='fa fa-exclamation'></i>
                            Al hacer click en el campo de la nota correspondiente se podra asignar un valor
                        </Badge>{' '} */}
                        </span>
                        
                        <Button variant="outline-secondary" style={{float: 'right'}} onClick={backToSubjects}> <i className='fa fa-arrow-left'></i> Volver a mis asignaturas </Button>{' '}
                    </div>
                    <div className="sub-header-line"></div>
                </Col>
            </Row>
            <TableQualification
                students={users}
                setSelectedStudent={setSelectedStudent}
                setStudentindex={setStudentindex}
                setSelectedQualification={setSelectedQualification}
                setShowModal={setShowModal}
            />
            <QualificationAssign 
                show={showModal}
                student={selectedStudent}
                qualification={selectedQualification}
                handleCancelModal={handleCancelModal}
                handleSaveQualification={handleSaveQualification}
            />
        </Container>
        </>
      );
    }
    
    export default SubjectDetails;