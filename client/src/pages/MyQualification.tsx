import { useEffect, useRef, useState } from 'react';

// compoents
import TableStudentQualification from '../components/UI/TableStudentQualification';
import Loader from '../components/UI/Loader';
// UI
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchReport, getReport, getReportError, getReportStatus } from '../app/states/Report';

import { selectIdPerson } from '../app/states/user'

function MyQualification() {
   
    const qualifications = useAppSelector(getReport);
    const qualificationsStatus = useAppSelector(getReportStatus);
    const qualificationsError = useAppSelector(getReportError);
    const currentYear = 2023;
    const id = useAppSelector(selectIdPerson);
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current === false) {
            if (qualificationsStatus === "idle")
                dispatch(fetchReport({'idStudent': id, 'schoolYear': currentYear}));
            if (qualificationsStatus === "loading")
                setLoading(true);
            if (qualificationsStatus === "succeeded")
                setLoading(false);
            effectRan.current = true
        }
    }, [getReportStatus, dispatch])


    return (
        <>
            <Container>
                <Row className="header">
                    <Col xs={12}>
                        <h3 className="header-title">Mis Calificaciones</h3>
                        <div className="header-line"></div>
                    </Col>
                    {/* <Col xs={3}>
                        <ButtonMain
                            text={'Agregar Comision'}
                            size="md"
                            icon="fa fa-add"
                            onClick={() => setShowFormUser(true)}
                        />
                    </Col> */}
                </Row>
                <Row>
                    <Container style={{padding: '0em 5em'}}>
                            {
                                qualificationsStatus === 'loading' 
                                ?
                                <Loader show={loading}/>
                                :
                                qualificationsStatus === "succeeded"
                                ?
                                <TableStudentQualification
                                    subjects={qualifications}
                                />
                                :
                                <p>{qualificationsError}</p>
                           
                            }
                        
                    </Container>
                </Row>
            </Container>
        </>
    );
}

export default MyQualification;
