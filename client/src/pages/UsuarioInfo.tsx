import { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {  useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchPersonData } from '../app/states/Persons';
import { selectId } from '../app/states/user';
import { getAge } from '../helpers/functions';
import { Person } from '../models/Person';
import '../styles/UsuarioInfo.css'

const UsuarioInfo = () => {
  const dispatch = useAppDispatch()
  const id = useAppSelector(selectId)

  const [userData, setUserData] = useState<Person>({
  })

  useEffect(() => {
    async function fetchData() {
      if (id) {
        const data = await dispatch(fetchPersonData(id));
        setUserData(data.payload)
      }
    }
  
    fetchData();
  }, [id]);

  const { idPerson, document, firstName, birthDate,phone, email, lastName, roleName, username } = userData;
 

  return (
    <Container className="d-flex justify-content-center gap-3 gap-sm-5 pt-5">
      <div style={{ alignSelf: "center" }}>
        <Image
          src={userData ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
          id="image"
        ></Image>
      </div>
      <div>
        <Row className="pb-5">
          <Col className="text-center" style={{ color: '#14238A' }}>
            <h3>
             {`${firstName} ${lastName}` || "-"}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Id:</h4>
          </Col>
          <Col xs={8}>
            <h4>{idPerson || "-"}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Usuario:</h4>
          </Col>
          <Col xs={8}>
            <h4>{username || "-"}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Edad:</h4>
          </Col>
          <Col xs={8}>
            <h4>{birthDate && getAge(birthDate) || "-"}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Dni:</h4>
          </Col>
          <Col xs={8}>
            <h4>{document || "-"}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Telefono:</h4>
          </Col>
          <Col xs={8}>
            <h4>{phone || "-"}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Email:</h4>
          </Col>
          <Col xs={8}>
            <h4>{email || "-"}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Rol:</h4>
          </Col>
          <Col xs={8}>
            <h4>
              {roleName || "-"}
            </h4>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default UsuarioInfo;
