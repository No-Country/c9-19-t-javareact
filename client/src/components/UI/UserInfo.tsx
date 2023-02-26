import { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPersonData } from '../../app/states/Persons';
import {
  getSelectedPerson,
  setSelectedPerson,
} from '../../app/states/SelectedPerson';
import { getAge } from '../../helpers/functions';
import { Person } from '../../models/Person';
import Loader from './Loader';

interface Props {
  show: boolean;
  onHide: () => void;
}

const UserInfo: React.FC<Props> = (props) => {
  const [personData, setPersonData] = useState<Person>({});
  const user = useAppSelector(getSelectedPerson);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (user?.id) {
        const data = await dispatch(fetchPersonData(user.id));
        if (data.payload) {
          setPersonData(data.payload);
        } else {
          handleClose();
        }
      }
    }
    fetchData();
  }, [user]);

  const handleClose = () => {
    props.onHide(), setPersonData({});
    dispatch(setSelectedPerson(undefined));
  };

  const {
    idPerson,
    document,
    firstName,
    birthDate,
    phone,
    email,
    lastName,
    username,
  } = personData;

  return (
    <>
      {personData.idPerson ? (
        <>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header className="border-0 justify-content-center">
                  <h3 style={{ color: '#14238A' }}>{`${firstName} ${lastName}` || ''}</h3>
                </Modal.Header>       
            <Modal.Body className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 gap-sm-5">
              <div style={{ alignSelf: 'center' }}>
                <Image
                  src={
                    personData
                      ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                      : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                  }
                  id="image"
                ></Image>
              </div>
                <Container className='rows-container'>
        <Row>
          <Col xs={4}>
            <h5>Id:</h5>
          </Col>
          <Col xs={8}>
            <h5>{idPerson || ""}</h5>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h5>Usuario:</h5>
          </Col>
          <Col xs={8}>
            <h5>{username || ""}</h5>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h5>Edad:</h5>
          </Col>
          <Col xs={8}>
            <h5>{birthDate && getAge(birthDate) || ""}</h5>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h5>Dni:</h5>
          </Col>
          <Col xs={8}>
            <h5>{document || ""}</h5>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h5>Telefono:</h5>
          </Col>
          <Col xs={8}>
            <h5>{phone || ""}</h5>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h5>Email:</h5>
          </Col>
          <Col xs={8}>
            <h5>{email || ""}</h5>
          </Col>
        </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer className="border-0">
              <Button onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <Loader show={props.show && !personData.idPerson} />
      )}
    </>
  );
};
export default UserInfo;
