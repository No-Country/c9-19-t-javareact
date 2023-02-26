
import { useState, useEffect, useRef } from 'react';
// Models
import { Commission } from '../models/Commission';
import { User } from '../models/User';
import { Subject } from '../models/Subject';
import { CommissionSubject } from '../models/CommissionSubject';

// Components
import TableSubjects from './UI/TableSubjects';
import TableStudents from './UI/TableStudents';
import RelationAssign from './RelationAssign';
// UI
import '../styles/sub-header.css';
import '../styles/tabs.css';
import ButtonOutlineMain from './UI/ButtonOutlineMain';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getAllTeachers, getAllStudents, fetchPersons, getPersonsStatus } from '../app/states/Persons'

export interface Props {
    commission: Commission,
    handleSaveNewData: (value: Array<any>, value2: number, value3: number) => void;
    handleDeleteStudent: (vale: number) => void;
    backToCommissions: () => void; 
}


function CommissionDetails({commission, handleSaveNewData, handleDeleteStudent, backToCommissions}: Props) {
    
    const [modalTitle, setModalTitle] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [addTeacher, setAddTeacher] = useState<boolean>(false);
    const [currentSubject, setCurrentSubject] = useState<CommissionSubject>(new CommissionSubject());
    const [subjectIndex, setSubjectIndex] = useState<number>(0);
    const personsStatus = useAppSelector(getPersonsStatus)
    const teachers = useAppSelector(getAllTeachers);
    const students = useAppSelector(getAllStudents);

    const dispatch = useAppDispatch()

    const effectRan = useRef(false)

    useEffect(() => {
        if (effectRan.current === false) {
            if (personsStatus === "idle")
                dispatch(fetchPersons())
            effectRan.current = true
        }
    }, [personsStatus, dispatch])

    const handleUpdateTeacher = (subject: CommissionSubject, index: number) => {
        setCurrentSubject(subject);
        setSubjectIndex(index);
        setModalTitle('Seleccionar profesor');
        setShowModal(true);
    }
    
    const handleAddTeacher = (subject: CommissionSubject, index: number) => {
        setCurrentSubject(subject);
        setSubjectIndex(index);
        setAddTeacher(true);
        setModalTitle('Seleccionar profesor');
        setShowModal(true);
    }

    const handleClickDeleteStudent = (studentId: number) => {
        handleDeleteStudent(studentId)
    }
    
    const handleClickAddStudent = () => {
        setAddTeacher(false);
        setModalTitle('Seleccionar estudiante');
        setShowModal(true);    
    }

    const handleCloseModal = () => {
        setModalTitle('');
        setShowModal(false);   
    }

    const handleSave = (data: Array<any>) => {
        handleSaveNewData(data, currentSubject.idCommissionSubject || 1, subjectIndex);
        setModalTitle('');
        setShowModal(false);   
    }

    return (
        <>
        <Container>
            <Row>
                <Col xs={12} className="sub-header">
                    <div style={{marginBottom: '2em'}}>
                        <span> <strong> Comisión {commission.course} - {commission.division} </strong></span>
                        <Button variant="outline-secondary" style={{float: 'right'}} onClick={backToCommissions}> <i className='fa fa-arrow-left'></i> Volver a comisiones </Button>{' '}
                    </div>
                    <div className="sub-header-line"></div>
                </Col>
            </Row>
            <Tabs defaultActiveKey="1" justify className='tabs'>
                <Tab title='Profesores' eventKey="1">
                    <TableSubjects
                        subjects={commission.subjects}
                        handleUpdateTeacher={handleUpdateTeacher}
                        handleAddTeacher={handleAddTeacher}
                    />
                </Tab>
                <Tab title='Estudiantes' eventKey="2">
                    <ButtonOutlineMain
                        className='btn-agregar-estudiante'
                        text={'Agregar estudiante'}
                        size="md"
                        icon="fa fa-add"
                        onClick={() => handleClickAddStudent()}
                    />
                    {/* <TableStudents
                        students={commission.students!}
                        handleDeleteStudent={handleClickDeleteStudent}
                    /> */}
                </Tab>
            </Tabs>
            <RelationAssign 
                show={showModal}
                title={modalTitle} 
                handleClose={handleCloseModal} 
                handleSave={handleSave} 
                user={new User()} 
                users={addTeacher ? students : teachers} 
                relations={[]}
            />
        </Container>
        </>
      );
    }
    
    export default CommissionDetails;