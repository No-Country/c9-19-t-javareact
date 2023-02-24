
import { useState } from 'react';
// UI
import ButtonMain from '../components/UI/ButtonMain';
import ButtonSecondary from '../components/UI/ButtonSecondary';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useAppDispatch } from '../app/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { createPerson } from '../app/states/Persons';
import { Person } from '../models/Person';


const AddUser = () => {
  const data = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = data.state && data.state.user
  const [formData, setFormData] = useState<Person>({
    roleName: user === "profesor" ? "TEACHER" : user === "tutor" ? "TUTOR" : "STUDENT"
  });
  const page = user === "profesor" ? "profesores" : user === "tutor" ? "tutores" : "estudiantes"

  const handleSaveData = async () => {
    dispatch(createPerson(formData))
    handleReset()
    navigate(`/${page}`)
  }

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFormData({});
  };

  return (
    <>
      <Container>
        <Row className="header">
          <Col xs={9}>
            <h3 className="header-title">Añadir {user || "usuario"}</h3>
            <div className="header-line"></div>
          </Col>
        </Row>
        <Form className="px-5">
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre"
                  name="firstName"
                  value={formData.firstName || ''}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={6} md={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el apellido"
                  name="lastName"
                  value={formData.lastName || ''}
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
                  name="document"
                  value={formData.document || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Ingrese fecha de nacimiento</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="1980-07-25"
                  name="birthDate"
                  value={formData.birthDate || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Celular</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el telefono"
                  name="phone"
                  value={formData.phone || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su email"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {!user && <Col xs={6} md={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Rol</Form.Label>
                <Form.Select
                  name="roleName"
                  value={formData.roleName}
                  onChange={handleChange}
                >
                  <option>--Seleccione un rol del usuario--</option>
                  <option value="1"> Profesor </option>
                  <option value="2"> Tutor </option>
                  <option value="3"> Estudiante </option>
                </Form.Select>
              </Form.Group>
            </Col>}
          </Row>
          {/* <Row>
                            <Col xs={6} md={6}>
                                {
                                    formData.rol_id === '3' 
                                    &&
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Comision</Form.Label>
                                        <Form.Select 
                                            name="comision_id"
                                            value={formData.comision_id}
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
        <Row xs={4} className="justify-content-center mt-5 gap-5"> <ButtonSecondary
          text={'Reset'}
          size="md"
          icon='fa fa-times'
          onClick={handleReset}
        />
          <ButtonMain
            text={'Guardar'}
            size="md"
            icon='fa fa-save'
            onClick={handleSaveData}
          /></Row>

      </Container>
    </>
  )
}
export default AddUser