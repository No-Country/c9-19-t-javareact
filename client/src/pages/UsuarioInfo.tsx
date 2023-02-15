import { Container, Row, Col, Image } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import '../styles/UsuarioInfo.css'

const UsuarioInfo = () => {
  const id = useParams();
  const state = useLocation();

  const { dni, last_name, name, rol_id, image } = state.state.data;
  console.log(state.state.data)

  return (
    <Container className="d-flex justify-content-center gap-3 gap-sm-5 pt-5">
      <div style={{ alignSelf: "center" }}>
        <Image
          src={image ? image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
          id="image"
        ></Image>
      </div>
      <div>
        <Row className="pb-5">
          <Col className="text-center" style={{ color: '#14238A' }}>
            <h3>
              {name} {last_name}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Id:</h4>
          </Col>
          <Col xs={8}>
            <h4>{id.id}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Dni:</h4>
          </Col>
          <Col xs={8}>
            <h4>{dni}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Rol:</h4>
          </Col>
          <Col xs={8}>
            <h4>
              {rol_id === '1'
                ? 'Profesor'
                : rol_id === '2'
                  ? 'Tutor'
                  : 'Estudiante'}
            </h4>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default UsuarioInfo;
