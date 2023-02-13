
import { useEffect, useState } from 'react';

// Models
import { User } from '../models/User';

// compoents
import FormUsuario from '../components/formUsuario';
import RelationAssign from '../components/RelationAssign';
import ButtonMain from '../components/UI/ButtonMain';

// UI
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Usuarios () {
    
    const [showFormUser, setShowFormUser] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User>(new User());
    const [showRelations, setShowRelations] = useState<boolean>(false);
    const [usersToReltions, setUsersToReltions] = useState<Array<User>>([]);
    const [relations, setRelations] = useState<Array<User>>([]);

    const data: Array<User> = [
        {id: '1', rol_id: '1', name: 'Juan', last_name: 'Guzmán', dni: 12341456},
        {id: '2', rol_id: '2', name: 'Marcos', last_name: 'Díaz', dni: 12341456},
        {id: '3', rol_id: '2', name: 'Luciana', last_name: 'Acosta', dni: 12341456},
        {id: '4', rol_id: '2', name: 'Abigail', last_name: 'Ávila', dni: 12341456},
        {id: '5', rol_id: '3', name: 'Romina', last_name: 'Pérez', dni: 12341456},
        {id: '6', rol_id: '3', name: 'Esteban', last_name: 'Díaz', dni: 12341456},
        {id: '7', rol_id: '3', name: 'Mariel', last_name: 'Caro', dni: 12341456},
        {id: '8', rol_id: '3', name: 'Virginia', last_name: 'Sanchez', dni: 12341456},
    ]

    const roles = ['Profesor', 'tutor', 'estudiante']
    useEffect(() => {
    setSelectedUser(User.parseItem(new User()))
    }, [])

    const handleShowFormUser = () => {
        setShowFormUser(true);
    }

    const handleCloseFormUser = () => {
        setShowFormUser(false);
        setSelectedUser(new User())
    }

    const handleUpdateUsuario = (elem: any) => {
        let user = User.parseItem(
                    {'id': elem.id,
                    'rol_id': elem.rol_id,
                    'name': elem.nombre,
                    'last_name': elem.apellido,
                    'dni': elem.dni,
                    }
                    );
                
        setSelectedUser(user);
        handleShowFormUser();
    }

    const handleSaveFormUser = (user: User) => {
    if (user.id === undefined) {
        console.log('Guardo');
        console.log(user);
    } else {
        console.log('Modifico');
        console.log(user);
    }
    handleCloseFormUser();
    }
    

    const handleShowRelations = (elem: any) => {
        let user = User.parseItem(
                    {'id': elem.id,
                    'rol_id': elem.rol_id,
                    'name': elem.name,
                    'last_name': elem.last_name,
                    'dni': elem.dni,
                    }
                    );
                
        setSelectedUser(user);
        let users = []
        if (user.rol_id === '2') {
            users = data.filter( (d) => d.rol_id === '3')
        } else {
            users = data.filter( (d) => d.rol_id === '2')
        }
        setUsersToReltions(users);
        setRelations([]);
        setShowRelations(true);
    }

    const handleCloseRelations = () => {
        setShowRelations(false);
        setSelectedUser(new User());
    }

    return (    
        <>
            <Container>
                <Row className='header'>
                    <Col xs={9}>
                        <h3 className='header-title'>Usuarios</h3>
                        <div className='header-line'></div>
                    </Col>
                    <Col xs={3} >
                        <ButtonMain
                            text={'Agregar Usuario'}
                            size="md"
                            icon='fa fa-add'
                            onClick={handleShowFormUser}
                        />
                    </Col> 
                </Row>
                <Row>
                    <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Nombre y Apellido</th>
                            <th>Tipo</th>
                            <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((elem: User) => (
                                    <tr>
                                        <td>{elem.id}</td>
                                        <td>{elem.name} {elem.last_name}</td>
                                        <td>{roles[Number(elem.rol_id) - 1 | 0]}</td>
                                        <td> 
                                            <ButtonGroup>
                                                <OverlayTrigger
                                                    placement='bottom'
                                                    overlay={
                                                        <Tooltip>
                                                            Ver Perfil
                                                        </Tooltip>
                                                    }
                                                >
                                                    <Button variant="primary" onClick={() => handleUpdateUsuario(elem)}> 
                                                        <i className='fa fa-eye'></i>
                                                    </Button>
                                                </OverlayTrigger>
                                               
                                                <OverlayTrigger
                                                    placement='bottom'
                                                    overlay={
                                                        <Tooltip>
                                                            Editar Usuario
                                                        </Tooltip>
                                                    }
                                                >
                                                    <Button variant="warning" onClick={() => handleUpdateUsuario(elem)}> 
                                                        <i className='fa fa-edit'></i>
                                                    </Button>
                                                </OverlayTrigger>
                                                
                                                 <OverlayTrigger
                                                    placement='bottom'
                                                    overlay={
                                                        <Tooltip>
                                                            Eliminar usuario
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <Button variant="danger">
                                                        <i className='fa fa-trash'></i>
                                                    </Button>
                                                </OverlayTrigger>
                                               
                                                {
                                                    (elem.rol_id === '2' || elem.rol_id === '3')
                                                    && 
                                                    <OverlayTrigger
                                                        placement='bottom'
                                                        overlay={
                                                            <Tooltip>
                                                                Gestionar relaciones
                                                            </Tooltip>
                                                        }
                                                    >
                                                         <Button variant="info" onClick={() => handleShowRelations(elem)}>
                                                            <i className='fa fa-sitemap'></i>
                                                            </Button>
                                                    </OverlayTrigger>  
                                                }
                                            </ButtonGroup>
                                        </td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </Table>  
                    </Container>                        
                </Row>  
                <FormUsuario show={showFormUser} handleClose={handleCloseFormUser} handleSave={handleSaveFormUser} user={selectedUser}/>
                <RelationAssign show={showRelations} handleClose={handleCloseRelations} handleSave={handleSaveFormUser} user={selectedUser} users={usersToReltions} relations={relations}/>

            </Container>
        </>  
    )
}

export default Usuarios;