import { useState } from 'react';

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

import { selectTeachers, updateUser } from '../app/states/users';
import { useAppDispatch, useAppSelector } from '../app/hooks';


function Profesores() {
    const [showFormUser, setShowFormUser] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User>(new User());
    const [showRelations, setShowRelations] = useState<boolean>(false);
    const [usersToReltions, setUsersToReltions] = useState<Array<User>>([]);
    const [relations, setRelations] = useState<Array<User>>([]);
    const [modalTitle, setModalTitle] = useState<string>('');
    const users = useAppSelector(selectTeachers)

    const dispatch = useAppDispatch()

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

    const handleShowRelations = (elem: any) => {
        let user = User.parseItem(
            {
                'id': elem.id,
                'rol_id': elem.rol_id,
                'name': elem.name,
                'last_name': elem.last_name,
                'dni': elem.dni,
            }
        );

        setSelectedUser(user);
        let usersFiltered = []
        if (user.rol_id === '2') {
            setModalTitle('Asignar estudiante al tutor')
            usersFiltered = users.filter( (d) => d.rol_id === '3')
        } else {
            setModalTitle('Asignar tutor al estudiante')
            usersFiltered = users.filter( (d) => d.rol_id === '2')
        }
        setUsersToReltions(User.parseArray(usersFiltered));
        setRelations([]);
        setShowRelations(true);
    }

    const handleCloseRelations = () => {
        setShowRelations(false);
        setSelectedUser(new User());
    }

    const handleSaveRelations = (data: Array<User>) => {

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
                        <Row xs={1} md={2} lg={3} xl={4} className="g-2" style={{padding: '0em 5em'}}>
                            {users.map((user: any) => (
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

export default Profesores;
