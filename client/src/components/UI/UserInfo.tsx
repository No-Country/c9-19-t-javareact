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
import { Subject } from '../../models/Subject';
import Loader from './Loader';
import CardStudent from './CardStudent';
import { apiProps, useApi } from '../../hooks/useApi';
import TableStudentQualification from './TableStudentQualification';
interface Props {
  show: boolean;
  onHide: () => void;
}

const UserInfo: React.FC<Props> = (props) => {
  const [personData, setPersonData] = useState<Person>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [qualifications, setQualifications] = useState<Array<Subject>>(new Array());
  const [students, setStudents] = useState<Array<any>>(new Array());

  const user = useAppSelector(getSelectedPerson);
  const dispatch = useAppDispatch();
  const currentYear = 2023;

  useEffect(() => {
    async function fetchData() {
      if (user?.id) {
        const data = await dispatch(fetchPersonData(user.id));
        // console.log(data.payload)
        if (data.payload) {
          setPersonData(data.payload);
            if (data.payload.roleName === 'STUDENT') {
              setLoading(true);
              const apiPropertyes: apiProps = {
                path: `person/report`,
                method: 'post',
                body: {'idStudent': user.id, 'schoolYear': currentYear}

              };
              const response = await useApi(apiPropertyes);
              setQualifications(response.data.subjectQualificationsList);
              setLoading(false);
            }
            if (data.payload.roleName === 'TUTOR') {
              setLoading(true);
              const apiPropertyes: apiProps = {
                path: `tutor/students/${data.payload.idPerson}`,
                method: 'get',
              };
              const response = await useApi(apiPropertyes);
              setStudents(response.data);
              setLoading(false);
            }
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

  const handleSelectStudent = () => {

  }

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
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header className="border-0 justify-content-center">
                  <h3 style={{ color: '#14238A' }}>{`${firstName} ${lastName}` || ''}</h3>
              </Modal.Header>       
            <Modal.Body className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 gap-sm-5 my-5">
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
                  { 
                  (!loading && personData.roleName === 'STUDENT' && qualifications.length > 0)
                  &&
                      <Row>
                        <Col xs={12}>
                      
                        <TableStudentQualification
                          subjects={qualifications}
                        />
                         </Col>
                      </Row>
                    }
                    { 
                    (!loading && personData.roleName === 'TUTOR' && students.length > 0)
                    &&
                        <Row>
                          <Col xs={12}>
                            <div style={{marginTop: '1em'}}>
                                  <h5> <strong> Estudiantes a cargo </strong></h5>
                                  <hr></hr>
                            </div>
                            <Row xs={1} md={2} lg={3} xl={4} className="g-2">
                                {students.map((student: any, index: number) => (
                                    <Col key={student.idPerson}>
                                        <CardStudent
                                            student={student}
                                            showSubjects={false}
                                            handleSelect={(handleSelectStudent)}
                                        />
                                    </Col>
                                    ))}
                                </Row>
                          </Col>
                        </Row>
                    }
                   
                </Container>
               
               
            </Modal.Body>
            <Modal.Footer className="border-0">
              <Button onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <Loader show={props.show && !personData.idPerson && loading} />
      )}
    </>
  );
};
export default UserInfo;
