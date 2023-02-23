import { useEffect, useRef, useState } from 'react';

// compoents
import FormUsuario from '../components/formUsuario';
import RelationAssign from '../components/RelationAssign';
import CardPerson from '../components/UI/CardPerson';

// UI
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchPersons, getPersonsError, getPersonsStatus, selectAllPersons, updatePerson } from '../app/states/Persons';
import { Person } from '../models/Person';
import { User } from '../models';


function Tutores() {
    const [showFormUser, setShowFormUser] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<Person>({});
    const [showRelations, setShowRelations] = useState<boolean>(false);
    const [usersToReltions, setUsersToReltions] = useState<Array<User>>([]);
    const [relations, setRelations] = useState<Array<User>>([]);
    const [modalTitle, setModalTitle] = useState<string>('');
    const users = useAppSelector(selectAllPersons)
    const students = useAppSelector(selectAllPersons)
    const usersStatus = useAppSelector(getPersonsStatus)
    const usersError = useAppSelector(getPersonsError)
    const dispatch = useAppDispatch()

    const effectRan = useRef(false)

    useEffect(() => {
        if (effectRan.current === false) {
            if (usersStatus === "idle")
                dispatch(fetchPersons())
            effectRan.current = true
        }
    }, [usersStatus, dispatch])


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

    const handleShowRelations = (user: any) => {
        setSelectedUser(user);
        setModalTitle('Asignar estudiante al tutor')
        setUsersToReltions(students);
        setRelations([]);
        setShowRelations(true);
    }

    const handleCloseRelations = () => {
        setShowRelations(false);
        setSelectedUser({});
    }

    const handleSaveRelations = (data: Array<User>) => {

    }

    let content;

    if (usersStatus === 'loading') {
        content = <p>"Loading...</p>
    } else if (usersStatus === "succeeded") {
        content = users.map((user) => (
            <Col key={user.id}>
                <CardPerson
                    user={user}
                    handleUpdateUser={handleUpdateUser}
                />
            </Col>
        ))
    } else if (usersStatus === 'failed') {
        content = <p>{usersError}</p>;
    }

    return (
        <>
            <Container>
                <Row className="header">
                    <Col xs={9}>
                        <h3 className="header-title">Tutores</h3>
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
                    handleClose={handleCloseRelations} 
                    handleSave={handleSaveRelations} 
                    user={selectedUser} 
                    users={usersToReltions} 
                    relations={relations}/>
            </Container>
        </>
    );
}

export default Tutores;