import { useEffect, useRef, useState } from 'react';

// Models
import { User } from '../models/User';

// compoents
import FormUsuario from '../components/formUsuario';
import CardPerson from '../components/UI/CardPerson';

// UI
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Person } from '../models/Person';
import { fetchPersons, fetchTeachers, getPersonsError, getPersonsStatus, selectAllPersons, updatePerson } from '../app/states/Persons';


function Profesores() {
    const [showFormUser, setShowFormUser] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<Person>({});
    const teachers = useAppSelector(selectAllPersons)
    const teachersStatus = useAppSelector(getPersonsStatus)
    const teachersError = useAppSelector(getPersonsError)

    const dispatch = useAppDispatch()

    const effectRan = useRef(false)

    useEffect(() => {
        dispatch(fetchTeachers())
/*         dispatch(fetchTeachers())
        if (effectRan.current === false) {

            if (teachersStatus === "idle")
            effectRan.current = true
        } */
    }, [ dispatch])

    const handleCloseFormUser = () => {
        setShowFormUser(false);
        setSelectedUser({});
    };

    const handleUpdateUser = (user: Person) => {
        setSelectedUser(user);
        setShowFormUser(true);
    }

    const handleSaveFormUser = (user: any) => {
        dispatch(updatePerson(user))
        handleCloseFormUser();
    };

    let content;

    if (teachersStatus === 'loading') {
        content = <p>"Loading...</p>
    } else if (teachersStatus === "succeeded") {
        content = teachers.map((user) => (
            <Col key={user.id}>
                <CardPerson
                    user={user}
                    handleUpdateUser={handleUpdateUser}
                />
            </Col>
        ))
    } else if (teachersStatus === 'failed') {
        content = <p>{teachersError}</p>;
    }


    return (
        <>
            <Container>
                <Row className="header">
                    <Col xs={9}>
                        <h3 className="header-title">Profesores</h3>
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
            </Container>
        </>
    );
}

export default Profesores;