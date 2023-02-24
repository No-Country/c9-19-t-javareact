import { useEffect, useRef, useState } from 'react';

// Models
import { Qualification } from '../models/Qualification';
import { User } from '../models/User';
import { Subject } from '../models/Subject';

// compoents
import TableStudentQualification from '../components/UI/TableStudentQualification';

// UI
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchReport, getReport, getReportError, getReportStatus } from '../app/states/Report';


function MyQualification() {
   
    const qualifications = useAppSelector(getReport);
    const qualificationsStatus = useAppSelector(getReportStatus);
    const qualificationsError = useAppSelector(getReportError);
    const currentYear = 2023;

    // const [subjects, setSubjects] = useState([
    //     {   id: 1, 
    //         teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'},
    //         subject_name: 'Lengua',
    //         qualifications: [
    //             {id: 1, numberQualification: 10, period_id: 1}, 
    //             {id: 2, numberQualification: 10, period_id: 2}, 
    //             {id: 3, numberQualification: 10, period_id: 3}
    //         ]
    //     },    
    //     {   id: 2, 
    //         teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'},
    //         subject_name: 'Matermática',
    //         qualifications: [
    //             {id: 3, numberQualification: 10, period_id: 1}, 
    //             {id: 4, numberQualification: 10, period_id: 2}, 
    //             {id: 5, numberQualification: 10, period_id: 3}
    //         ]
    //     },    
    //     {   id: 3, 
    //         teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'},
    //         subject_name: 'Inglés',
    //         qualifications: [
    //             {id: 6, numberQualification: 10, period_id: 1}, 
    //             {id: 7, numberQualification: 10, period_id: 2}, 
    //             {id: 8, numberQualification: 10, period_id: 3}
    //         ]
    //     },    
    //     {   id: 4, 
    //         teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'},
    //         subject_name: 'Ciencias Natuales',
    //         qualifications: [
    //             {id: 9, numberQualification: 10, period_id: 1}, 
    //             {id: 10, numberQualification: 10, period_id: 2}, 
    //             {id: 11, numberQualification: 10, period_id: 3}
    //         ]
    //     },   
    // ]);

    const dispatch = useAppDispatch();
    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current === false) {
            if (qualificationsStatus === "idle")
                dispatch(fetchReport(currentYear));
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
                                <p>"Loading...</p>
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
