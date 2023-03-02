
import { useState, useEffect, useRef } from 'react';
// Models
import { Commission } from '../models/Commission';
import { User } from '../models/User';
import { Student } from '../models/Student';
import { Subject } from '../models/Subject';
import { CommissionSubject } from '../models/CommissionSubject';
import Loader from './UI/Loader'
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
// import { fetchCommissionStudents, getStudentsCommissionError, getStudentsCommissionStatus } from '../app/states/Commissions'
import { apiProps, useApi } from '../hooks/useApi';

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
    // const StudentsCommissionStatus = useAppSelector(getStudentsCommissionStatus);
    // const StudentsCommissionError = useAppSelector(getStudentsCommissionError);
    const [studentsCommission, setStudentsCommission] = useState<Array<Student>>([]);
    const [loadingStudents, setLoadingStudents] = useState<boolean>(false);

    const dispatch = useAppDispatch()

    const effectRan = useRef(false)

    useEffect(() => {
        if (effectRan.current === false) {
            if (personsStatus === "idle") {
                dispatch(fetchPersons())
            }
            // if (StudentsCommissionStatus === "idle") {
            // dispatch(fetchCommissionStudents(commission.commissionId));
            // }
            // if (commission.students!.length === 0) {
            //     console.log(commission.commissionId)
            // }
            effectRan.current = true
        }
    }, [personsStatus, commission, dispatch])


    const handleUpdateTeacher = (subject: CommissionSubject, index: number) => {
        setCurrentSubject(subject);
        setSubjectIndex(index);
        setAddTeacher(true);
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

    const handleClickDeleteStudent = async (idInscription: number) => {
        setLoadingStudents(true);
        const apiPropertyes: apiProps = {
            path: `admin/inscription/${idInscription}`,
            method: 'delete',
        };
        const response = await useApi(apiPropertyes);
        setStudentsCommission(studentsCommission.filter(elem => elem.idInscription != idInscription))
        setLoadingStudents(false);
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

    const handleSave = async (data: Array<any>) => {
        if (!addTeacher) {
            let index = studentsCommission.findIndex(elem => elem.id === data[0].id);
            if (index === -1) {
                setLoadingStudents(true);
                const apiPropertyes: apiProps = {
                path: `admin/inscription`,
                method: 'post',
                body: {
                    "inscriptionDate": "2023-02-26",
                    "idCommission":commission.commissionId,
                    "idStudent": data[0].id
                    }
                };
                const response = await useApi(apiPropertyes);
                let ns = {
                    id: data[0].id,
                    idIncription: response.data.idIncription,
                    firstName: data[0].fullName.split(' ')[0],
                    lastName: data[0].fullName.split(' ')[1],
                    document: response.data.document,
                    isRegular: true
                }
                studentsCommission.push(Student.parseItem(ns))
                setLoadingStudents(false);
            }
        } else {
            handleSaveNewData(data, currentSubject.idCommissionSubject || 1, subjectIndex)
        }
        
        setModalTitle('');
        setShowModal(false);   
    }

    const getStudents =  async () => {
        setLoadingStudents(true);
        const apiPropertyes: apiProps = {
          path: `admin/commission/${commission.commissionId}`,
          method: 'get',
        };
        const response = await useApi(apiPropertyes);
        setStudentsCommission(Student.parseArray(response.data.students));
        setLoadingStudents(false);
    }

    const handleSelectTab = (key: any) => {
        if (key == 2) {
            getStudents();
        }
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
            <Tabs defaultActiveKey="1" justify className='tabs' onSelect={handleSelectTab}>
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
                    {
                        loadingStudents 
                        ?
                        <Loader
                            show={loadingStudents}/>
                        :
                        <TableStudents
                            students={studentsCommission}
                            handleDeleteStudent={handleClickDeleteStudent}
                        />
                    }
                </Tab>
            </Tabs>
            <RelationAssign 
                show={showModal}
                title={modalTitle} 
                handleClose={handleCloseModal} 
                handleSave={handleSave} 
                user={new User()} 
                users={addTeacher ? teachers : students} 
                relations={[]}
            />
        </Container>
        </>
      );
    }
    
    export default CommissionDetails;