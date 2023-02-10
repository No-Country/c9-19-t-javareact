
import { useState, useEffect } from 'react';
// Models
import { User } from '../models/User';
// UI
import ButtonMain from './UI/ButtonMain';
import ButtonSecondary from './UI/ButtonSecondary';
import Modal  from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

export interface Props {
    show: boolean,
    handleClose: () => void,
    handleSave: (value: User) => void,
    user: User
}

const initialForm = User.parseItem(new User());

function FormUsuario({show, handleClose, handleSave, user}: Props) {

    const [form, setForm] = useState<User>(initialForm);
 
    useEffect(() => {
        if (user.id !== undefined) {
            setForm(user);
        } 
    }, [user]);

    const handleCloseModal = () => {
        handleReset();
        handleClose();
    }
    const handleSaveData = () => {
        if (!form.name 
            || !form.last_name 
            || !form.dni 
            || !form.username 
            || !form.password 
            || !form.rol_id 
            || (form.rol_id === '3' && !form.comision_id)
        ) {
            alert('datos incompletos');
        } else {
            handleSave(form);
            handleReset();

        }
    }

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    };

    const handleReset = () => {
        setForm(initialForm);
      };
      
    return (
        <>
        <Modal 
            show={show} 
            onHide={handleCloseModal} 
            keyboard={false} 
            backdrop="static"  
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {
                        form.id !== undefined
                        ?
                        'Modificar Usuario'
                        :
                        'Agregar Usuario'
                    }
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <Container>
                    <Form>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingrese el nombre"
                                        name="name"
                                        value={form.name || ''}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={6} md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control
                                         type="text"
                                         placeholder="Ingrese el apellido"
                                         name="last_name"
                                         value={form.last_name || ''}
                                         onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>DNI</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingrese el DNI"
                                        name="dni"
                                        value={form.dni || ''}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={6} md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nombre de usuario</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingrese el nombre de usuario"
                                        name="username"
                                        value={form.username || ''}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingrese la Contraseña"
                                        name="password"
                                        value={form.password || ''}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={6} md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Rol</Form.Label>
                                    <Form.Select 
                                        name="rol_id"
                                        value={form.rol_id}
                                        onChange={handleChange}
                                    >
                                        <option>--Seleccione un rol del usuario--</option>
                                        <option value="1"> Profesor </option>
                                        <option value="2"> Tutor </option>
                                        <option value="3"> Alumno </option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6}>
                                {
                                    form.rol_id === '3' 
                                    &&
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Comision</Form.Label>
                                        <Form.Select 
                                            name="comision_id"
                                            value={form.comision_id}
                                            onChange={handleChange}
                                        >
                                            <option>--Seleccione una comisión del alumno--</option>
                                            <option value="1"> Comisión 1 </option>
                                            <option value="2"> Comisión 2 </option>
                                        </Form.Select>
                                    </Form.Group>
                                }
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Modal.Body>
            
            <Modal.Footer>
                
                <ButtonSecondary
                    text={'Cancelar'}
                    size="md"
                    icon='fa fa-times'
                    onClick={handleCloseModal}
                />
                <ButtonMain
                    text={'Guardar'}
                    size="md"
                    icon='fa fa-save'
                    onClick={handleSaveData}
                />
            </Modal.Footer>
        </Modal>
        </>
      );
    }
    
    export default FormUsuario;