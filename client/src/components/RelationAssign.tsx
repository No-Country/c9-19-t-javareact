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
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export interface Props {
    show: boolean,
    title: string
    user: User,
    relations: Array<User>, 
    users: Array<User>,
    handleClose: () => void,
    handleSave: (value: Array<User>) => void,
}

function RelationAssign({show, title, user, relations, users, handleClose, handleSave}: Props) {
 
    const [newRelations, setNewRelations] = useState<Array<User>>([])

    useEffect(() => {
        setNewRelations(relations)
    }, [relations])
    
    
    const handleCloseModal = () => {
        handleClose();
    }
    const handleSaveData = () => {
        handleSave(newRelations);
    }

    const handleChange = (e: { target: { value: string | undefined; }; }) => {
        if (newRelations.findIndex(elem => elem. id === Number(e.target.value)) === -1) {
            let user = users.find((elem) => elem.id === Number(e.target.value));
            if (user) {
                setNewRelations([...newRelations, user]);
            }
        }
       

    };

    const onClickDeleteRelation = (id: number) => {
        setNewRelations(newRelations.filter( (r) => r.id != id));
    }
      
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
                    { title }
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <Container>
                    <Form>
                        <Row>
                            <Col xs={12} md={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Asignar {user.rol_id ? user.rol_id === '2' ? 'estudiante' : 'tutor' : 'entidad'}</Form.Label>
                                    <Form.Select 
                                        name="comision_id"
                                        onChange={handleChange}
                                        value={''}
                                        disabled={(user.rol_id === '3' || user.rol_id === undefined) && newRelations.length === 1}
                                    >
                                        <option>--Seleccione una opción --</option>
                                        {
                                            users.map((elem)=> (
                                                <option key={elem.id} value={elem.id}> {elem.fullName}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                    {
                        newRelations.length > 0
                        &&
                        <Container>                            
                        <h4> Relaciones </h4>
                            <ListGroup>
                                {
                                    newRelations.map((elem) => (
                                        <ListGroup.Item key={elem.id} className="d-flex justify-content-between align-items-center">
                                            {elem.fullName} 
                                            <Button
                                                style={{height: 'fit-content'}}
                                                variant="danger"
                                                size='sm' 
                                                onClick={() => onClickDeleteRelation(elem.id)}
                                            >
                                              <i className='fa fa-trash'></i>  
                                            </Button>    
                                        </ListGroup.Item>
                                    ))
                                }
                            </ListGroup>
                        </Container>
                    }
                   
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
    
    export default RelationAssign;

