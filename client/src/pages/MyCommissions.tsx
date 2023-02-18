import { useState } from 'react';

// Models
import { Commission } from '../models/Commission';
import { User } from '../models/User';
import { Subject } from '../models/Subject';

// compoents
import CardCommission from '../components/UI/CardCommission';
import MySubjects from '../components/MySubjects';
import SubjectDetails from '../components/SubjectDetails';

// UI
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function MyCommissions() {
    const [selectedCommission, setSelectedCommission] = useState<Commission>(new Commission());
    const [showCommissions, setShowCommissions] = useState(true);
    const [showSubjets, setShowSubjets] = useState(false);
    const [showQualification, setShowQualification] = useState(false);
    const [commissionIndex, setCommissionIndex] = useState<number>(0);
    const [selectedSubject, setSelectedSubject] = useState<Subject>(new Subject());
    const [subjectIndex, setSubjectIndex] = useState<number>(0);
    const [commissions, setCommissions] = useState<Array<Commission>>([
        {id: 1, course: '2', division: 'A', school_year: 2022, 
            subjects: [
                {
                    id: 1,
                    subject_name: 'Lengua',
                    teacher_id: 2,
                    teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'} 
                },
                {
                    id: 2,
                    subject_name: 'Matemática',
                    teacher_id: 2,
                    teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'} 
                }
            ],
            students: [
                {id: 7, rol_id: '3', name: 'Mariel', last_name: 'Caro', dni: 12341456},
                {id: 8, rol_id: '3', name: 'Virginia', last_name: 'Sanchez', dni: 12341456}
            ]
        },
        {id: 2, course: '2', division: 'B', school_year: 2022,
                subjects: [
                    {
                        id: 1,
                        subject_name: 'Lengua',
                        teacher_id: 2,
                        teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'} 
                    },
                ]
        },
        {id: 3, course: '2', division: 'C', school_year: 2022,
                subjects: [
                    {
                        id: 1,
                        subject_name: 'Lengua',
                        teacher_id: 2,
                        teacher: {id: 2, name: 'Marcos', last_name: 'Díaz'} 
                    },
                ]
        },    
    ]);

    

    const handleSelectCommission = (data: Commission, index: number) => {
        // obtener detalle de comision
        setSelectedCommission(data);
        setShowCommissions(false);
        setShowSubjets(true);
        setCommissionIndex(index);
    }

    const handleSelectSubject = (data: Subject, index: number) => {
        // obtener detalle de comision
        setSelectedSubject(data);
        setShowSubjets(false);
        setShowQualification(true);
        setCommissionIndex(index);
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
                            &&
                            <Row xs={1} md={2} lg={3} xl={4} className="g-2">
                                {commissions.map((commission: any, index: number) => (
                                    <Col key={commission.id}>
                                        <CardCommission
                                            commission={commission}
                                            index={index}
                                            handleSelect={handleSelectCommission}
                                        />
                                    </Col>
                                ))}
                            </Row>
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
                                backToSubjects={backToSubjects}
                            />
                        }
                    </Container>
                </Row>
            </Container>
        </>
    );
}

export default MyCommissions;
