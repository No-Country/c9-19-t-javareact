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

import { fetchUsers, getUsersError, getUsersStatus, selectAllUsers, updateUser } from '../app/states/users';
import { useAppDispatch, useAppSelector } from '../app/hooks';


function Profesores() {
    const [showFormUser, setShowFormUser] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User>(new User());
    const teachers = useAppSelector(selectAllUsers)
    const teachersStatus = useAppSelector(getUsersStatus)
    const teachersError = useAppSelector(getUsersError)

    const dispatch = useAppDispatch()

    const effectRan = useRef(false)

    useEffect(() => {
        if (effectRan.current === false) {
            if (teachersStatus === "idle")
                dispatch(fetchUsers())
            effectRan.current = true
        }
    }, [teachersStatus, dispatch])

    const handleCloseFormUser = () => {
        setShowFormUser(false);
        setSelectedUser(new User());
    };

    const handleUpdateUser = (user: User) => {
        setSelectedUser(user);
        setShowFormUser(true);
    }

    const handleSaveFormUser = (user: any) => {
        dispatch(updateUser(user))
        handleCloseFormUser();
    };

    let content;

    if (teachersStatus === 'loading') {
        content = <p>"Loading...</p>
    } else if (teachersStatus === "succeeded") {
        content = teachers && teachers?.length >= 1 && teachers?.map((user) => (
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
                        <Row xs={1} md={2} lg={3} xl={4} className="g-2" style={{ padding: '0em 5em' }}>
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
