import { useEffect, useState } from "react";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchPersonData } from "../../app/states/Persons";
import { getSelectedPerson, setSelectedPerson } from "../../app/states/SelectedPerson";
import { getAge, objectIsEmpty } from "../../helpers/functions";
import { Person } from "../../models/Person";

interface Props {
  show: boolean,
  onHide: () => void
}

const UserInfo : React.FC<Props> = (props) => {
  const [personData, setPersonData] = useState<Person>({})
  const user = useAppSelector(getSelectedPerson)
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchData() {
      if (user?.id) {
        const data = await dispatch(fetchPersonData(user.id));
      if(data.payload) {
        setPersonData(data.payload)
        }
      }
    }
    fetchData();
  }, [user]);

  const handleClose = () => {
    props.onHide(),
    setPersonData({})
    dispatch(setSelectedPerson(undefined))
  }

  const { idPerson, document, firstName, birthDate, phone, email, lastName, username } = personData;

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
     <Modal.Header className="border-0" closeButton/>
        <Modal.Body className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 gap-sm-5">
        <div style={{ alignSelf: "center" }}>
        <Image
          src={personData ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
          id="image"
        ></Image>
      </div>
      <div>
        <Row className="pb-1">
          <Col className="text-center" style={{ color: '#14238A' }}>
            <h3>
            {`${firstName} ${lastName}` || ""}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Id:</h4>
          </Col>
          <Col xs={8}>
            <h4>{idPerson || ""}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Usuario:</h4>
          </Col>
          <Col xs={8}>
            <h4>{username || ""}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Edad:</h4>
          </Col>
          <Col xs={8}>
            <h4>{birthDate && getAge(birthDate) || ""}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Dni:</h4>
          </Col>
          <Col xs={8}>
            <h4>{document || ""}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Telefono:</h4>
          </Col>
          <Col xs={8}>
            <h4>{phone || ""}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Email:</h4>
          </Col>
          <Col xs={8}>
            <h4>{email || ""}</h4>
          </Col>
        </Row>
      </div>
        </Modal.Body>     
        <Modal.Footer className="border-0">
          <Button onClick={handleClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}
export default UserInfo