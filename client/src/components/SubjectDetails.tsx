
import { useState, useEffect } from 'react';
// Models
import { Subject } from '../models/Subject';
import { Student } from '../models/Student';
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
    qualifications: Array<Student>;
    showModal: boolean;
    backToSubjects: () => void;
    setShowModal: (value: boolean) => void;
    saveQualification: (value: number, value2: number, value3: number, value4: number) => void;
}


function SubjectDetails({
    subject, 
    qualifications,
    backToSubjects,
    saveQualification,
    showModal,
    setShowModal,
}: Props) {
    
    const [studentindex, setStudentindex] = useState<any>(null);
    const [selectedQualification, setSelectedQualification] = useState<any>(null);
    const [period, setPeriod] = useState<number>(0);
    const [selectedStudent, setSelectedStudent] = useState<Student>(new Student());


    const handleCancelModal = () => {
        setStudentindex(null);
        setSelectedQualification(null);
        setShowModal(false);
        setPeriod(0);
    }

    
    const handleSaveQualification = (value: number) => {
        saveQualification(studentindex, period, value, selectedStudent.idPerson!);
    }

    return (
        <>
        <Container>
            <Row>
                <Col xs={12} className="sub-header">
                    <div style={{marginBottom: '2em'}}>
                        <span> <strong> {subject.subjectName} </strong>
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
                students={qualifications}
                setStudentindex={setStudentindex}
                setSelectedQualification={setSelectedQualification}
                setShowModal={setShowModal}
                setPeriod={setPeriod}
                setSelectedStudent={setSelectedStudent}
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