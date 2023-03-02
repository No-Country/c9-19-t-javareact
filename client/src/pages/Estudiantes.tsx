import { useEffect, useRef, useState } from 'react';

// Models
import { User } from '../models/User';

// compoents
import FormUsuario from '../components/formUsuario';
import RelationAssignStudent from '../components/RelationAssignStudent';
import CardPerson from '../components/UI/CardPerson';

// UI
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchPersons, getAllStudents, getAllTeachers, getAllTutors, getPersonsError, getPersonsStatus, updatePerson } from '../app/states/Persons';
import { Person } from '../models/Person';
import { deleteRelation, fetchRelation, setRelation } from '../app/states/Relation';
import UserInfo from '../components/UI/UserInfo';
import { getUserInfoModalState, handleShowInfoModal } from '../app/states/ui';
import Loader from '../components/UI/Loader';



function Estudiantes() {
    const [showFormUser, setShowFormUser] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<Person>({});
    const [showRelations, setShowRelations] = useState<boolean>(false);
    const [usersToReltions, setUsersToReltions] = useState<Array<User>>([]);
    const [relations, setRelations] = useState<Array<User>>([]);
    const [modalTitle, setModalTitle] = useState<string>('');
    const students = useAppSelector(getAllStudents)
    const tutors = useAppSelector(getAllTutors)
    const studentsStatus = useAppSelector(getPersonsStatus)
    const studentsError = useAppSelector(getPersonsError)
    const InfoModalState = useAppSelector(getUserInfoModalState)

    const dispatch = useAppDispatch()

    
    const effectRan = useRef(false)

    useEffect(() => {
        if (effectRan.current === false) {
            if (studentsStatus === "idle")
                dispatch(fetchPersons())
                
            effectRan.current = true
        }
    }, [studentsStatus, dispatch])

    const handleCloseFormUser = () => {
        setShowFormUser(false);
        setSelectedUser({});
    };

    const handleUpdateUser = (user: Person) => {
        setSelectedUser(user);
        setShowFormUser(true);
    }

    const handleSaveFormUser = (user: Person) => {
        dispatch(updatePerson(user))
        handleCloseFormUser();
    };

    const handleShowRelations = async(user: any) => {

        let {payload} = await dispatch(fetchRelation({id:user.id,path:'student'}))
        setSelectedUser(user);
        setModalTitle('Asignar tutor al estudiante')
        setUsersToReltions(tutors);
        setRelations(payload);
        setShowRelations(true);

    }
   

    const handleCloseRelations = () => {
        setShowRelations(false);
        setSelectedUser({});
    }

    const handleSaveRelations = (data: any) => {
        console.log(data);
        let shouldDispatch = true;
    
        if (relations.length > 0) {
            relations?.map((elem) => {
                if ((elem.idTutor === data.idTutor) && (elem.idStudent === data.idStudent)) {
                    shouldDispatch = false;
                }
            });
        }
    
        if (shouldDispatch) {
            dispatch(setRelation(data));
        }
    };
    const handleDelRelations = (id: number) => {
        
        dispatch(deleteRelation(id))
    }
    let content
    if (studentsStatus === 'loading') {
        content = <Loader show={true} />
    } else if (studentsStatus === "succeeded") {
        content = 
        <Row>
            <Container>
            <Row xs={1} md={2} lg={3} xl={4} className="g-2">
            { students.map((user) => (
            <Col key={user.id}>
                <CardPerson
                    user={user}
                    handleUpdateUser={handleUpdateUser}
                    handleShowRelations={handleShowRelations}
                />
            </Col>
        ))}
            </Row>
        </Container>
    </Row>
    } else if (studentsStatus === 'failed') {
        content = <p>{studentsError}</p>;
    }


    return (
        <>
            <Container>
                <Row className="header">
                    <Col xs={9}>
                        <h3 className="header-title">Estudiantes</h3>
                        <div className="header-line"></div>
                    </Col>
                </Row>
                    {content}
                <FormUsuario
                    show={showFormUser}
                    handleClose={handleCloseFormUser}
                    handleSave={handleSaveFormUser}
                    user={selectedUser}
                    setShowFormUser={setShowFormUser}
                />
                <RelationAssignStudent
                    show={showRelations}
                    title={modalTitle} 
                    handleDel={handleDelRelations}
                    handleClose={handleCloseRelations} 
                    handleSave={handleSaveRelations} 
                    user={selectedUser} 
                    users={usersToReltions} 
                    relations={relations}/>
                <UserInfo show={InfoModalState} onHide={() => dispatch(handleShowInfoModal())}/>
            </Container>
        </>
    );
}

export default Estudiantes;