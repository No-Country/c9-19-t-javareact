import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo-white.png';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 login-container"
    >
      <Row
        xs="1"
        lg="2"
        className="d-flex justify-content-lg-center gap-5 gap-lg-0 vh-100 w-100 p-lg-4"
      >
        <Col className="d-flex flex-column align-items-center justify-content-end justify-content-lg-evenly gap-5 gap-lg-0 p-lg-4">
          <img src={logo} alt="" width={300} height="auto" />
          <h1 style={{ color: 'white', fontWeight: 'bold' }}>
            Te damos la bienvenida
          </h1>
        </Col>
        <Col className="p-lg-5 m-auto">
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
