import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Login = () => {
  const [formData, setFormData] = useState({});

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row xs="1" sm="2" className="justify-content-md-center gap-5 gap-sm-0">
        <Col>
          <h1>Bienvenido a Good Learner!</h1>
        </Col>
        <Col>
          <h2>Iniciar sesión</h2>
          <Form className="d-flex flex-column w-1">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <a href="">Olvidó su contraseña?</a>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
