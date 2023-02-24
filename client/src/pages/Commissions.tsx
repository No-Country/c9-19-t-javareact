import { useState, useRef, useEffect } from 'react';

// Models
import { Commission } from '../models/Commission';
import { User } from '../models/User';

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
    // const [commissions, setCommissions] = useState<Array<Commission>>(getAllCommissions)
    const commissions = useAppSelector(getAllCommissions)
    const commissionsStatus = useAppSelector(getCommissionsStatus)
    const commissionsError = useAppSelector(getCommissionsError)
    // const [commissions, setCommissions] = useState<Array<Commission>>([
    //     {id: 1, course: '2', division: 'A', school_year: 2022, 
    //         subjects: [
    //             {
    //                 id: 1,
    //                 subject_name: 'Lengua',
    //                 teacher_id: 2,
    //                 teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'} 
    //             },
    //             {
    //                 id: 2,
    //                 subject_name: 'Matemática',
    //                 teacher_id: 3,
    //                 teacher: {id: 3, name: 'Luciana', last_name: 'Acosta'} 
    //             },
    //             {
    //                 id: 3,
    //                 subject_name: 'Geografía',
    //             }
    //         ],
    //         students: [
    //             {id: 7, rol_id: '3', name: 'Mariel', last_name: 'Caro', dni: 12341456},
    //             {id: 8, rol_id: '3', name: 'Virginia', last_name: 'Sanchez', dni: 12341456}
    //         ]
    //     },
    //     {id: 2, course: '2', division: 'B', school_year: 2022,
    //             subjects: [
    //                 {
    //                     id: 1,
    //                     subject_name: 'Lengua',
    //                     teacher_id: 4,
    //                     teacher: {id: 4, name: 'Abigail', last_name: 'Ávila'} 
    //                 },
    //                 {
    //                     id: 2,
    //                     subject_name: 'Matemática',
    //                     teacher_id: 5,
    //                     teacher: {id: 5, name: 'Romina', last_name: 'Pérez'} 
    //                 },
    //                 {
    //                     id: 3,
    //                     subject_name: 'Geografía',
    //                     teacher_id: 3,
    //                     teacher: {id: 3, name: 'Luciana', last_name: 'Acosta'} 
    //                 }
    //             ]
    //     },
    //     {id: 3, course: '2', division: 'C', school_year: 2022,
    //             subjects: [
    //                 {
    //                     id: 1,
    //                     subject_name: 'Lengua',
    //                     teacher_id: 3,
    //                     teacher: {id: 3, name: 'Luciana', last_name: 'Acosta'} 
    //                 },
    //                 {
    //                     id: 2,
    //                     subject_name: 'Matemática',
    //                 },
    //                 {
    //                     id: 3,
    //                     subject_name: 'Geografía',
    //                 }
    //             ]
    //     },    
    // ])

    const dispatch = useAppDispatch();
    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current === false) {
            if (commissionsStatus === "idle")
                dispatch(fetchCommissions());
                console.log(commissions);
            effectRan.current = true
        }
    }, [commissionsStatus, dispatch])

    const handleSelect = (data: Commission, index: number) => {
        // obtener detalle de comision
        setSelectedCommission(data);
        setShowCommissions(false);
        setCommissionIndex(index);
    }

    const handleSaveNewData = (data: Array<any>, currentSubjectId: number, subjectIndex: number) => {
        if (data[0].rol_id === '1') {
            selectedCommission.subjects![subjectIndex].teacher_id = data[0].id;
            selectedCommission.subjects![subjectIndex].teacher = User.parseItem(data[0]);
            commissions[commissionIndex] = selectedCommission; 
            // setCommissions(commissions);
        }
        if (data[0].rol_id === '3') {
            selectedCommission.students!.push(User.parseItem(data[0]));
            // setCommissions([...commissions, selectedCommission]) 
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
