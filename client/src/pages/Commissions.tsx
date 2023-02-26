import { useState, useRef, useEffect } from 'react';

// Models
import { Commission } from '../models/Commission';
import { User } from '../models/User';
import { Teacher } from '../models/Teacher';


// compoents
import CardCommission from '../components/UI/CardCommission';
import CommissionDetails from '../components/CommissionDetails';

// UI
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchCommissions, getAllCommissions, getCommissionsError, getCommissionsStatus } from '../app/states/Commissions';

function Commissions() {
    const [selectedCommission, setSelectedCommission] = useState<Commission>(new Commission());
    const [showCommissions, setShowCommissions] = useState(true);
    const [commissionIndex, setCommissionIndex] = useState<number>(0);
    const commissions = useAppSelector(getAllCommissions);
    const commissionsStatus = useAppSelector(getCommissionsStatus);
    const commissionsError = useAppSelector(getCommissionsError);

    const dispatch = useAppDispatch();
    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current === false) {
            if (commissionsStatus === "idle")
                dispatch(fetchCommissions());
            effectRan.current = true
        }
    }, [commissionsStatus, dispatch])

    const handleSelect = (data: Commission, index: number) => {
        // obtener detalle de comision
        setSelectedCommission(Commission.parseItem(data));
        setCommissionIndex(index);
        setShowCommissions(false);
    }

    const handleSaveNewData = (data: Array<any>, currentSubjectId: number, subjectIndex: number) => {
        if (data[0].roleName === 'TEACHER') {
            let nt = new Teacher();
            nt.idPerson = data[0].id;
            nt.firstName = data[0].fullName.split(' ')[0];
            nt.lastName = data[0].fullName.split(' ')[1];
            selectedCommission.subjects![subjectIndex].teacher = nt;
            commissions[commissionIndex] = selectedCommission;
        }
        if (data[0].rol_id === '3') {
            selectedCommission.students!.push(User.parseItem(data[0]));
        }
    }

    const handleDeleteStudent = (id: number) => {
        commissions[commissionIndex].students = selectedCommission.students!.filter( s => s.id  != id); 
        // setCommissions(commissions)
    }

    const backToCommissions = () => {
        setSelectedCommission(new Commission());
        setShowCommissions(true)
    }

    return (
        <>
            <Container>
                <Row className="header">
                    <Col xs={12}>
                        <h3 className="header-title">Comisiones</h3>
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
                                <p>"Loading...</p>
                                :
                                commissionsStatus === "succeeded"
                                ?
                                <Row xs={1} md={2} lg={3} xl={4} className="g-2">
                                    {commissions.map((commission: Commission, index: number) => (
                                        <Col key={commission.commissionId}>
                                            <CardCommission
                                                commission={commission}
                                                index={index}
                                                handleSelect={handleSelect}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                                :
                                <p>{commissionsError}</p>
                            :
                            <CommissionDetails
                                commission={selectedCommission}
                                handleSaveNewData={handleSaveNewData}
                                handleDeleteStudent={handleDeleteStudent}
                                backToCommissions={backToCommissions}
                            />
                        }
                    </Container>
                </Row>
            </Container>
        </>
    );
}

export default Commissions;
