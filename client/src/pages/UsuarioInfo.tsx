import { Container, Row, Col, Image } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../app/states/user';
import '../styles/UsuarioInfo.css'

const UsuarioInfo = () => {
/*   const _id = useParams();
  const state = useLocation(); */
  const useUser = useAppSelector(selectUser)

   const { id, nombreUsuario, rol } = useUser;
 

  return (
    <Container className="d-flex justify-content-center gap-3 gap-sm-5 pt-5">
      <div style={{ alignSelf: "center" }}>
        <Image
          src={useUser ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
          id="image"
        ></Image>
      </div>
      <div>
        <Row className="pb-5">
          <Col className="text-center" style={{ color: '#14238A' }}>
            <h3>
              {nombreUsuario}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Id:</h4>
          </Col>
          <Col xs={8}>
            <h4>{id}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Dni:</h4>
          </Col>
          <Col xs={8}>
            <h4>{id}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Rol:</h4>
          </Col>
          <Col xs={8}>
            <h4>
              {rol}
            </h4>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default UsuarioInfo;
