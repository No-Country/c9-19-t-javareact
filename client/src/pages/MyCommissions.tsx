import { useState, useRef, useEffect } from 'react';

// Models
import { Commission } from '../models/Commission';
import { Student } from '../models/Student';
import { Subject } from '../models/Subject';

// compoents
import CardCommission from '../components/UI/CardCommission';
import MySubjects from '../components/MySubjects';
import SubjectDetails from '../components/SubjectDetails';

// UI
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Loader from '../components/UI/Loader';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchTeacherCommissions, getTeacherCommissions, getTeacherCommissionsStatus, getTeacherCommissionsError } from '../app/states/TeacherCommissions';

import { selectIdPerson } from '../app/states/user'
import { apiProps, useApi } from '../hooks/useApi';

function MyCommissions() {
    const [selectedCommission, setSelectedCommission] = useState<Commission>(new Commission());
    const [showCommissions, setShowCommissions] = useState(true);
    const [showSubjets, setShowSubjets] = useState(false);
    const [showQualification, setShowQualification] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState<Subject>(new Subject()); 
    const [qualifications, setQualifications] = useState<Array<Student>>(new Array());    
    const commissions = useAppSelector(getTeacherCommissions);
    const commissionsStatus = useAppSelector(getTeacherCommissionsStatus);
    const commissionsError = useAppSelector(getTeacherCommissionsError);
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const effectRan = useRef(false);
    const id = useAppSelector(selectIdPerson);

    useEffect(() => {
        if (effectRan.current === false) {
            if (commissionsStatus === "idle")
                dispatch(fetchTeacherCommissions(id));
            if (commissionsStatus === "loading")
                setLoading(true);
            if (commissionsStatus === "succeeded")
                setLoading(false);
            effectRan.current = true
        }
    }, [getTeacherCommissionsStatus, dispatch])

    const handleSelectCommission = (data: Commission) => {
        // obtener detalle de comision
        setSelectedCommission(data);
        setShowCommissions(false);
        setShowSubjets(true);
    }

    const handleSelectSubject = async (data: Subject) => {
        // obtener detalle de comision
        setSelectedSubject(data);
        setLoading(true);
        const apiPropertyes: apiProps = {
            path: `report/subject/${data.commissionSubjectId}`,
            method: 'get',
        }
        const response = await useApi(apiPropertyes);
        if (response.data) {
            setQualifications(response.data)
            setShowSubjets(false);
            setShowQualification(true);
        }
        setLoading(false);
    }

    
    const backToCommissions = () => {
        setSelectedCommission(new Commission());
        setShowCommissions(true);
        setShowSubjets(false);
    }

    const backToSubjects = () => {
        setSelectedSubject(new Subject());
        setShowQualification(false);
        setShowSubjets(true);
    }

    const handleSaveNewQualification = (i: number, period: number, newQualification: number) => {
        switch(period) {
            case 1:
                if (qualifications[i].qualifications!.FIRST_TRIMESTER === undefined) {

                } else {

                }
                qualifications[i].qualifications!.FIRST_TRIMESTER = Number(newQualification);
                break;
            case 2:
                if (qualifications[i].qualifications!.SECOND_TRIMESTER === undefined) {

                } else {

                }
                qualifications[i].qualifications!.SECOND_TRIMESTER = Number(newQualification);
                break;
            case 3:
                if (qualifications[i].qualifications!.THIRD_TRIMESTER === undefined) {

                } else {

                }
                qualifications[i].qualifications!.THIRD_TRIMESTER = Number(newQualification);
                break;                         
        }
        setQualifications(qualifications);
        setShowModal(false);
    } 

    return (
        <>
            <Container>
                <Row className="header">
                    <Col xs={12}>
                        <h3 className="header-title">Mis Comisiones</h3>
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
                            showCommissions
                                ?
                                commissionsStatus === 'loading' 
                                ?
                                <Loader show={loading}/>
                                :
                                commissionsStatus === "succeeded"
                                ?
                                <Row xs={1} md={2} lg={3} xl={4} className="g-2">
                                    {commissions.map((commission: Commission) => (
                                        <Col key={commission.commissionId}>
                                            <CardCommission
                                                commission={commission}
                                                handleSelect={handleSelectCommission}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                                :
                                <p>{commissionsError}</p>
                            :
                            null
                        }
                        {
                            showSubjets
                            &&
                            <MySubjects
                                commission={selectedCommission}
                                subjects={selectedCommission.subjects!}
                                backToCommissions={backToCommissions}
                                handleSelect={handleSelectSubject}
                            />
                        }
                        {
                            showQualification
                            &&
                            <SubjectDetails
                                subject={selectedSubject}
                                qualifications={qualifications}
                                backToSubjects={backToSubjects}
                                showModal={showModal}
                                saveQualification={handleSaveNewQualification}
                                setShowModal={setShowModal}
                            />
                        }
                        {
                            loading
                            &&
                            <Loader show={loading}/>
                        }
                    </Container>
                </Row>
            </Container>
        </>
    );
}

export default MyCommissions;
