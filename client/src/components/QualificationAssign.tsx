
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
    show: boolean;
    student: any;
    qualification: any;
    handleCancelModal: () => void,
    handleSaveQualification: (value: number) => void;
}

function QualificationAssign({
    show,
    student,
    qualification,
    handleCancelModal,
    handleSaveQualification,
}: Props) {


    const [qualificationValue, SetQualificationValue] = useState(qualification ? qualification.numberQualification : 0);

    const handleSaveData = () => {
        handleSaveQualification(qualificationValue);   
        SetQualificationValue(0)     
    }

    return (
        <>
        <Modal 
            show={show} 
            onHide={handleCancelModal} 
            keyboard={false} 
            backdrop="static"  
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Asignar nota a { student.firstName } { student.lastName }
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <Container>
                    <Form>
                        <Row>
                            <Col xs={12} md={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Asignar nota</Form.Label>
                                    <Form.Control 
                                        type="number"
                                        name="calification"
                                        value={qualificationValue}
                                        onChange={e => SetQualificationValue(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Modal.Body>
            
            <Modal.Footer>
                
                <ButtonSecondary
                    text={'Cancelar'}
                    size="sm"
                    icon='fa fa-times'
                    onClick={handleCancelModal}
                />
                <ButtonMain
                    text={'Guardar'}
                    size="sm"
                    icon='fa fa-save'
                    onClick={handleSaveData}
                />
            </Modal.Footer>
        </Modal>
        </>
    );
} export default QualificationAssign;