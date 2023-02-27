import { useEffect, useRef, useState } from 'react';

// Models
import { User } from '../models/User';

// compoents
import FormUsuario from '../components/formUsuario';
import RelationAssign from '../components/RelationAssign';
import CardPerson from '../components/UI/CardPerson';

// UI
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchPersons, getAllStudents, getAllTeachers, getAllTutors, getPersonsError, getPersonsStatus, updatePerson } from '../app/states/Persons';
import { Person } from '../models/Person';
import { deleteRelation, fetchRelation, setRelation } from '../app/states/Relation';


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
        dispatch(setRelation(data))
    }
    const handleDelRelations = (id: number) => {
        dispatch(deleteRelation(id))
    }
    let content
    if (studentsStatus === 'loading') {
        content = <p>"Loading...</p>
    } else if (studentsStatus === "succeeded") {
        content = students.map((user) => (
            <Col key={user.id}>
                <CardPerson
                    user={user}
                    handleUpdateUser={handleUpdateUser}
                    handleShowRelations={handleShowRelations}
                />
            </Col>
        ))
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
                <Row>
                    <Container>
                        <Row xs={1} md={2} lg={3} xl={4} className="g-2">
                        {content}
                        </Row>
                    </Container>
                </Row>
                <FormUsuario
                    show={showFormUser}
                    handleClose={handleCloseFormUser}
                    handleSave={handleSaveFormUser}
                    user={selectedUser}
                    setShowFormUser={setShowFormUser}
                />
                <RelationAssign
                    show={showRelations}
                    title={modalTitle} 
                    handleDel={handleDelRelations}
                    handleClose={handleCloseRelations} 
                    handleSave={handleSaveRelations} 
                    user={selectedUser} 
                    users={usersToReltions} 
                    relations={relations}/>
            </Container>
        </>
    );
}

export default Estudiantes;