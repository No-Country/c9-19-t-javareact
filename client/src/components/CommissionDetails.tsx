
import { useState, useEffect } from 'react';
// Models
import { Commission } from '../models/Commission';
import { User } from '../models/User';
import { Subject } from '../models/Subject';

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

export interface Props {
    commission: Commission,
    handleSaveNewData: (value: Array<any>, value2: number, value3: number) => void;
    handleDeleteStudent: (vale: number) => void;
    backToCommissions: () => void; 
}


function CommissionDetails({commission, handleSaveNewData, handleDeleteStudent, backToCommissions}: Props) {
    
    const [modalTitle, setModalTitle] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [usersToAdd, setUsersToAdd] = useState<Array<User>>([]);
    const [currentSubject, setCurrentSubject] = useState<Subject>(new Subject());
    const [subjectIndex, setSubjectIndex] = useState<number>(0);

    const [users, setUsers] = useState([
        {id: 1, rol_id: '1', name: 'Juan', last_name: 'Guzmán', dni: 12341456},
        {id: 2, rol_id: '1', name: 'Marcos', last_name: 'Díaz', dni: 12341456},
        {id: 3, rol_id: '1', name: 'Luciana', last_name: 'Acosta', dni: 12341456},
        {id: 4, rol_id: '1', name: 'Abigail', last_name: 'Ávila', dni: 12341456},
        {id: 5, rol_id: '1', name: 'Romina', last_name: 'Pérez', dni: 12341456},
        {id: 6, rol_id: '3', name: 'Esteban', last_name: 'Díaz', dni: 12341456},
        {id: 7, rol_id: '3', name: 'Mariel', last_name: 'Caro', dni: 12341456},
        {id: 8, rol_id: '3', name: 'Virginia', last_name: 'Sanchez', dni: 12341456},    
    ]);

    const handleUpdateTeacher = (subject: Subject, index: number) => {
        let usersFiltered = [];
        setCurrentSubject(subject);
        setSubjectIndex(index);
        usersFiltered = users.filter( (d) => d.rol_id === '1' && d.id != subject.teacher_id)        
        setUsersToAdd(User.parseArray(usersFiltered));
        setModalTitle('Seleccionar profesor');
        setShowModal(true);
    }
    
    const handleAddTeacher = (subject: Subject, index: number) => {
        let usersFiltered = [];
        setCurrentSubject(subject);
        setSubjectIndex(index);
        usersFiltered = users.filter( (d) => d.rol_id === '1')        
        setUsersToAdd(User.parseArray(usersFiltered));
        setModalTitle('Seleccionar profesor');
        setShowModal(true);
    }

    const handleClickDeleteStudent = (studentId: number) => {
        handleDeleteStudent(studentId)
    }
    
    const handleClickAddStudent = () => {
        let usersFiltered = []
        usersFiltered = users.filter( (d) => d.rol_id === '3' && !commission.students?.find(elem => elem.id === d.id) )        
        setUsersToAdd(User.parseArray(usersFiltered));
        setModalTitle('Seleccionar estudiante');
        setShowModal(true);    
    }

    const handleCloseModal = () => {
        setModalTitle('');
        setShowModal(false);   
    }

    const handleSave = (data: Array<any>) => {
        handleSaveNewData(data, currentSubject.id || 1, subjectIndex);
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
                        subjects={commission.subjects!}
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
                    <TableStudents
                        students={commission.students!}
                        handleDeleteStudent={handleClickDeleteStudent}
                    />
                </Tab>
            </Tabs>
            <RelationAssign 
                show={showModal}
                title={modalTitle} 
                handleClose={handleCloseModal} 
                handleSave={handleSave} 
                user={new User()} 
                users={usersToAdd} 
                relations={[]}
            />
        </Container>
        </>
      );
    }
    
    export default CommissionDetails;