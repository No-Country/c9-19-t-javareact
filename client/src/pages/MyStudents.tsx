
import { useEffect, useRef, useState } from 'react';
// Models
import { Student } from '../models/Student';

// Components
import CardStudent from '../components/UI/CardStudent';
import TableStudentQualification from '../components/UI/TableStudentQualification';
import Loader from '../components/UI/Loader';
;
// UI
import '../styles/sub-header.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchStudents, getStudents, getStudentsError, getStudentsStatus } from '../app/states/Students';

import { selectIdPerson } from '../app/states/user'
import { apiProps, useApi } from '../hooks/useApi';


function MyStudents() {
    const [showStudentQualification, setShowStudentQualification] = useState<boolean>(false);
    const [selectedStudent, setSelectedStudent] = useState<Student>(new Student());
    const [selectedStudentSubjects, setSelectedStudentSubjects] = useState<Array<any>>(new Array());
    const students = useAppSelector(getStudents);
    const studentsStatus = useAppSelector(getStudentsStatus);
    const studentsError = useAppSelector(getStudentsError);
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const effectRan = useRef(false);
    const id = useAppSelector(selectIdPerson);
    const currentYear = 2023;

    useEffect(() => {
        if (effectRan.current === false) {
            if (studentsStatus === "idle")
                dispatch(fetchStudents(id));
            if (studentsStatus === "loading")
                setLoading(true);
            if (studentsStatus === "succeeded")
                setLoading(false);
            effectRan.current = true
        }
    }, [getStudentsStatus, dispatch])
    
    const handleSelectStudent = async (data: Student) => {
        setSelectedStudent(data);
        setLoading(true);
        const apiPropertyes: apiProps = {
          path: `person/report`,
          method: 'post',
          body: {'idStudent': data.idPerson, 'schoolYear': currentYear}
        };
        const response = await useApi(apiPropertyes);
        if (response.data) {
            setSelectedStudentSubjects(response.data.subjectQualificationsList)
            setShowStudentQualification(true);
        }
        setLoading(false);
    }

    const backToStudents = () => {
        setShowStudentQualification(false);
        setSelectedStudent(new Student());
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
                            ? 
                                studentsStatus === 'loading' 
                                ?
                                <Loader show={loading}/>
                                :
                                studentsStatus === "succeeded"
                                ?
                                <Row xs={1} md={2} lg={3} xl={4} className="g-2">
                                {students.map((student: any, index: number) => (
                                    <Col key={student.idPerson}>
                                        <CardStudent
                                            student={student}
                                            showSubjects={true}
                                            handleSelect={handleSelectStudent}
                                        />
                                    </Col>
                                    ))}
                                </Row>
                                :
                                <p>{studentsError}</p>
                            :
                            null
                        }
                        {
                            (showStudentQualification && selectedStudent)
                            &&
                            <Container>
                            <Row>
                                <Col xs={12} className="sub-header">
                                    <div style={{marginBottom: '2em'}}>
                                        <span> <strong> Materias del estudiante {selectedStudent.firstName} {selectedStudent.lastName} </strong></span>
                                        <Button variant="outline-secondary" style={{float: 'right'}} onClick={backToStudents}> <i className='fa fa-arrow-left'></i> Volver a mis estudiantes </Button>{' '}
                                    </div>
                                    <div className="sub-header-line"></div>
                                </Col>
                            </Row>
                            {
                                selectedStudentSubjects.length > 0
                                ?
                                <TableStudentQualification
                                    subjects={selectedStudentSubjects}
                                />
                                :
                                <p>  Sin calificaciones cargadas</p>
                            }
                          
                        </Container>
                           
                        }
                    </Container>
                </Row>
            </Container>

        </>
      );
    }
    
    export default MyStudents;