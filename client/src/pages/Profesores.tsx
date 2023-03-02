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
import { fetchPersons, getAllTeachers, getPersonsError, getPersonsStatus, updatePerson } from '../app/states/Persons';
import UserInfo from '../components/UI/UserInfo';
import { getUserInfoModalState, handleShowInfoModal } from '../app/states/ui';
import Loader from '../components/UI/Loader';


function Profesores() {
    const [showFormUser, setShowFormUser] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<Person>({});
    const teachers = useAppSelector(getAllTeachers)
    const teachersStatus = useAppSelector(getPersonsStatus)
    const teachersError = useAppSelector(getPersonsError)
    const dispatch = useAppDispatch()
    const InfoModalState = useAppSelector(getUserInfoModalState)

    const effectRan = useRef(false)

    useEffect(() => {
        if (effectRan.current === false) {
            if (teachersStatus === "idle")
                dispatch(fetchPersons())
            effectRan.current = true
        }
    }, [teachersStatus, dispatch])

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
        content = <Loader show={true} />
    } else if (teachersStatus === "succeeded") {
        content =
        <Row>
        <Container>
            <Row xs={1} md={2} lg={3} xl={4} className="g-2">
                {teachers.map((user) => (
            <Col key={user.id}>
                <CardPerson
                    user={user}
                    handleUpdateUser={handleUpdateUser}
                />
            </Col>
        ))}
        </Row>
        </Container>
        </Row>
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
                {content}
                <FormUsuario
                    show={showFormUser}
                    handleClose={handleCloseFormUser}
                    handleSave={handleSaveFormUser}
                    user={selectedUser}
                    setShowFormUser={setShowFormUser}
                />
                <UserInfo show={InfoModalState} onHide={() => dispatch(handleShowInfoModal())}/>
            </Container>
        </>
    );
}

export default Profesores;