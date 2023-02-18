
import { useState } from 'react';
// Models
import { User } from '../models/User';
// UI
import ButtonMain from '../components/UI/ButtonMain';
import ButtonSecondary from '../components/UI/ButtonSecondary';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useAppDispatch } from '../app/hooks';
import { updateUser } from '../app/states/users';
import { useLocation, useNavigate } from 'react-router-dom';


const AddUser = () => {
  const data = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = data.state && data.state.user
  const [formData, setFormData] = useState<User>({
    rol_id: user === "profesor" ? "1" : user === "tutor" ? "2" : "3"
  });
  const page = user === "profesor" ? "profesores" : user === "tutor" ? "tutores" : "estudiantes"

  const handleSaveData = async () => {
    dispatch(updateUser(formData))
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
                  name="name"
                  value={formData.name || ''}
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
                  name="last_name"
                  value={formData.last_name || ''}
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
                  value={formData.dni || ''}
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
                  value={formData.username || ''}
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
                  value={formData.password || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            {!user && <Col xs={6} md={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Rol</Form.Label>
                <Form.Select
                  name="rol_id"
                  value={formData.rol_id}
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