
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
    handleDel: (id:number) => void,
    handleFetch: (id:number,path:string) => void,
}
export const bonds = [
    {id:1,name:'FATHER'},
    {id:2,name:'MOTHER'},
    {id:3,name:'BROTHER'},
    {id:4,name:'SISTER'},
    {id:5,name:'GRANDFATHER'},
    {id:6,name:'GRANDMOTHER'},
    {id:7,name:'AUNT'},
    {id:8,name:'UNCLE'},
    {id:9,name:'COUSIN'},
    {id:10,name:'FRIEND'},
    {id:11,name:'LEGAL_GUARDIAN'},
    {id:12,name:'NEIGHBOR'}
]

export interface  bondProps{
    
        idStudent: string | number | undefined,
        idTutor: string | number | undefined,
        relation: string | undefined   
}
function RelationAssign({show, title, user, relations, users, handleClose, handleSave,handleDel}: Props) {
    const [newRelations, setNewRelations] = useState<Array<User>>([])
    const [newBond, setBond] = useState<string | undefined>(undefined)
    console.log(user,users)
    
    useEffect(() => {
        setNewRelations(relations)
    }, [relations])
    
    
    const handleCloseModal = () => {
        handleClose();
    }
    const handleSaveData = () => {
        if(newRelations.length !== 0 && newBond !== undefined ){

            let relation:bondProps = {
                idStudent: user.rol_id === 'student' ? newRelations[0].id : user.id,
                idTutor: user.rol_id === 'student' ? user.id : newRelations[0].id,
                relation: newBond   
            }
            handleSave(relation);

        }

    }

    const handleChange = (e: { target: { value: string | undefined; }; }) => {
        if (newRelations.findIndex(elem => elem. id === Number(e.target.value)) === -1) {
            let user = users.find((elem) => elem.id === Number(e.target.value));
            if (user) {
                setNewRelations([...newRelations, user]);
            }
        }
       

    };
    const handleChangeRelation = (e: { target: { value: number; }; }) => {
        if(e.target.value !== undefined){
            setBond(bonds[e.target.value-1].name)
        }
            
        
       

    };

    const onClickDeleteRelation = (id: number) => {
        handleDel(id)
        setNewRelations(newRelations.filter( (r) => r.id != id));
    }
        console.log(newRelations)
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
                                                        {/* ADDING BONDS */}
                            <Col xs={12} md={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Asignar parentesco</Form.Label>
                                    <Form.Select 
                                        name="comision_id"
                                        onChange={handleChangeRelation}
                                        value={''}
                                        /*  disabled={newBond.id ? false : false}  */
                                    >
                                        <option>{newBond ? newBond : '--Seleccione una opción -- '}</option>
                                        {
                                            bonds.map((elem)=> (
                                                <option key={elem.id} value={elem.id}> {elem.name}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Asignar  {user.rol_id ? user.rol_id === '2' ? 'estudiante' : 'tutor' : 'entidad'}</Form.Label>
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
                                    newRelations.map(({fullNameTutor,relation}:Any) => (
                                         <ListGroup.Item key={1} className="d-flex justify-content-between align-items-center">
                                            {fullNameTutor} ({relation})
                                            <Button
                                                key={1}
                                                style={{height: 'fit-content'}}
                                                variant="danger"
                                                size='sm' 
                                                onClick={() => onClickDeleteRelation(1)}
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