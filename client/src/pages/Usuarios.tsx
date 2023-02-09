
import { useEffect, useState } from 'react';

// Models
import { User } from '../models/User';

// compoents
import FormUsuario from '../components/formUsuario';

// UI
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Usuarios () {
    
    const [showFormUser, setShowFormUser] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User>(new User());

    const data = [
        {id: 1, rol_id: 1, nombre: 'Juan', apellido: 'Guzmán', dni: '12341456', tipo: 'Estudiante'},
        {id: 2, rol_id: 2, nombre: 'Marcos', apellido: 'Díaz', dni: '12341456', tipo: 'Profesor'},
        {id: 3, rol_id: 3, nombre: 'Romina', apellido: 'Pérez', dni: '12341456', tipo: 'Tutor'},
    ]

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
                'username': '40852741',
                'password': 'password',}
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


    return (    
        <>
            <Container>
                <Row>
                    <Col xs={9} className='header'>
                        <h2>Usuarios</h2>
                    </Col>
                    <Col xs={2} >
                        <Button style={{marginTop: '2em'}} variant="primary" onClick={handleShowFormUser}>
                            Agregar Usuario
                        </Button>
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
                                data.map((elem: any) => (
                                    <tr>
                                        <td>{elem.id}</td>
                                        <td>{elem.nombre} {elem.apellido}</td>
                                        <td>{elem.tipo}</td>
                                        <td> 
                                            <ButtonGroup>
                                                <Button variant="primary"> 
                                                    <i className='fa fa-eye'></i>
                                                </Button>
                                                <Button variant="warning" onClick={() => handleUpdateUsuario(elem)}> 
                                                    <i className='fa fa-edit'></i>
                                                </Button>
                                                <Button variant="danger">
                                                    <i className='fa fa-trash'></i>
                                                </Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </Table>  
                    </Container>
                {/* handleUpdateUsuario */}
                        
                </Row>  
                <FormUsuario show={showFormUser} handleClose={handleCloseFormUser} handleSave={handleSaveFormUser} user={selectedUser}/>

            </Container>
        </>  
    )
}

export default Usuarios;