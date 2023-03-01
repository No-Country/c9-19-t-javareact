import { useState, useEffect } from 'react';
// UI
import ButtonMain from './UI/ButtonMain';
import ButtonSecondary from './UI/ButtonSecondary';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useAppDispatch } from '../app/hooks';
import ButtonDanger from './UI/ButtonDanger';
import DeleteAlert from './UI/DeleteAlert';
import { Person } from '../models/Person';
import { fetchPersonData } from '../app/states/Persons';

export interface Props {
  show: boolean;
  handleClose: () => void;
  setShowFormUser: React.Dispatch<React.SetStateAction<boolean>>;
  handleSave: (value: Person) => void;
  user: Person;
}

function FormUsuario({
  show,
  handleClose,
  handleSave,
  user,
  setShowFormUser,
}: Props) {
  const [form, setForm] = useState<Person>({});
  const [showAlert, setshowAlert] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (user.id) {
        const data = await dispatch(fetchPersonData(user.id));
        setForm(data.payload);
      }
    }
  
    fetchData();
  }, [user]);

  const handleCloseModal = () => {
    handleReset();
    handleClose();
  };

  const handleSaveData = () => {
    if (!form.firstName || !form.lastName || !form.document || !form.username) {
      alert('datos incompletos');
    } else {
      handleSave(form);
      handleReset();
    }
  };

  const handleChange = (e : any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setForm({});
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
            Modificar Usuario {form.roleName === "STUDENT" ? "estudiante" : form.roleName === "TUTOR" ? "tutor" : "profesor"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <Form>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el nombre"
                      name="firstName"
                      value={form.firstName || ''}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={6} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el apellido"
                      name="lastName"
                      value={form.lastName || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el DNI"
                      name="document"
                      value={form.document || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ingrese fecha de nacimiento</Form.Label>
                    <Form.Control
                      type="date"
                      name="birthDate"
                      value={form.birthDate || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Celular</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el telefono"
                      name="phone"
                      value={form.phone || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su email"
                      name="email"
                      value={form.email || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                {!user && (
                  <Col xs={6} md={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Rol</Form.Label>
                      <Form.Select
                        name="roleName"
                        value={form.roleName}
                        onChange={handleChange}
                      >
                        <option>--Seleccione un rol del usuario--</option>
                        <option value="1"> Profesor </option>
                        <option value="2"> Tutor </option>
                        <option value="3"> Estudiante </option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                )}
              </Row>
              {/* <Row>
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
                        </Row> */}
            </Form>
          </Container>
        </Modal.Body>

        <Modal.Footer className="justify-content-between px-4">
         {/* <ButtonDanger
            text={'Eliminar '}
            icon="fa fa-trash"
            onClick={() => {
              setShowFormUser(false);
              setshowAlert(true);
            }}
          />*/}
          <div className="d-flex gap-2">
            <ButtonSecondary
              text={'Cancelar'}
              icon="fa fa-times"
              onClick={handleCloseModal}
            />
            <ButtonMain
              text={'Guardar'}
              icon="fa fa-save"
              onClick={handleSaveData}
            />
          </div>
        </Modal.Footer>
      </Modal>
      <DeleteAlert
        show={showAlert}
        onHide={() => setshowAlert(false)}
        user={user}
        closeForm={handleCloseModal}
        setShowFormUser={setShowFormUser}
      />
    </>
  );
}

export default FormUsuario;
