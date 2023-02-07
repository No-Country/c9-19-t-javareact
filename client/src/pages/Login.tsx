import React, { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import ButtonMain from '../components/ButtonMain';

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
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 diagonal-split-background"
    >
      <Row
        xs="1"
        lg="2"
        className="d-flex justify-content-lg-center gap-5 gap-lg-0 w-100 p-sm-5"
      >
        <Col className="d-flex flex-column align-items-center justify-content-lg-center p-sm-5">
          <h1 style={{ color: 'white' }}>Bienvenido</h1>
        </Col>
        <Col className="p-sm-5">
          <Form className="d-flex flex-column">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresá tu email"
                name="email"
                onChange={handleOnChange}
                style={{ height: '4rem' }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresá tu contraseña"
                name="password"
                onChange={handleOnChange}
                style={{ height: '4rem' }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <a href="">¿Olvidaste tu contraseña?</a>
            </Form.Group>
            <ButtonMain
              text={'INICIAR SESIÓN'}
              size="lg"
              onClick={handleSubmit}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
