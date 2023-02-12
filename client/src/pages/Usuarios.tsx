import { useState } from 'react';

// Models
import { User } from '../models/User';

// compoents
import FormUsuario from '../components/formUsuario';
import ButtonMain from '../components/UI/ButtonMain';

// UI
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import CardPerson from '../components/UI/CardPerson';

function Usuarios() {
    const [showFormUser, setShowFormUser] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [users, setUsers] = useState([{ id: "1", rol_id: "1", name: 'Juan', last_name: 'Guzmán', dni: 12341456 },
    { id: "2", rol_id: "2", name: 'Marcos', last_name: 'Díaz', dni: 12341456 },
    { id: "3", rol_id: "3", name: 'Romina', last_name: 'Pérez', dni: 12341456 }])

    const handleCloseFormUser = () => {
        setShowFormUser(false);
        setSelectedUser(new User());
    };

    const handleUpdateUsuario = (user: any) => {
        setSelectedUser(user);
        setShowFormUser(true);
    }

    const handleSaveFormUser = (user: any) => {
        if (user.id === undefined) {
            console.log('Guardo');
            console.log(user);
        } else {
            console.log('Modifico');
            console.log(user);
        }
        setUsers((prevState) => prevState.map((item) => {
            if (item.id === user.id) {
                return {
                    ...item, name: user.name,
                    last_name: user.last_name,
                    dni: user.dni, username: user.username,
                    password: user.password

                };
            }
            return item;
        }))
        handleCloseFormUser();
    };

    return (
        <>
            <Container>
                <Row className="header">
                    <Col xs={9}>
                        <h3 className="header-title">Usuarios</h3>
                        <div className="header-line"></div>
                    </Col>
                    <Col xs={3}>
                        <ButtonMain
                            text={'Agregar Usuario'}
                            size="md"
                            icon="fa fa-add"
                            onClick={() => setShowFormUser(true)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Container>
                        <Row xs={1} md={2} lg={3} xl={4} className="g-2">
                            {users.map((user: any) => (
                                <Col key={user.id}>
                                    <CardPerson
                                        user={user}
                                        handleUpdateUsuario={handleUpdateUsuario}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Row>
                <FormUsuario
                    show={showFormUser}
                    handleClose={handleCloseFormUser}
                    handleSave={handleSaveFormUser}
                    user={selectedUser}
                />
            </Container>
        </>
    );
}

export default Usuarios;
