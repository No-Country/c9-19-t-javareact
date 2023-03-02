import { useEffect, useRef, useState } from 'react';

// compoents
import FormUsuario from '../components/formUsuario';
import RelationAssignStudent from '../components/RelationAssignStudent';
import CardPerson from '../components/UI/CardPerson';

// UI
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchPersons, getAllStudents, getAllTutors, getPersonsError, getPersonsStatus, updatePerson } from '../app/states/Persons';
import { Person } from '../models/Person';
import { User } from '../models';
import { FamilyRelationship } from '../models/FamilyRelationship';
import UserInfo from '../components/UI/UserInfo';
import { getUserInfoModalState, handleShowInfoModal } from '../app/states/ui';
import { deleteRelation, fetchRelation, setRelation } from '../app/states/Relation';
import Loader from '../components/UI/Loader';



function Tutores() {
    const [showFormUser, setShowFormUser] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<Person>({});
    const [showRelations, setShowRelations] = useState<boolean>(false);
    const [usersToReltions, setUsersToReltions] = useState<Array<Person>>([]);
    const [relations, setRelations] = useState<Array<FamilyRelationship>>([]);
    const [modalTitle, setModalTitle] = useState<string>('');
    const users = useAppSelector(getAllTutors)
    const students = useAppSelector(getAllStudents)
    const usersStatus = useAppSelector(getPersonsStatus)
    const usersError = useAppSelector(getPersonsError)
    const dispatch = useAppDispatch()
    const InfoModalState = useAppSelector(getUserInfoModalState)

    const effectRan = useRef(false)

    useEffect(() => {
        if (effectRan.current === false) {
            if (usersStatus === "idle")
                dispatch(fetchPersons())
            effectRan.current = true
        }
    }, [usersStatus, dispatch])

    const handleCloseFormUser = () => {
        setShowFormUser(false);
        setSelectedUser({});
    };

    const handleUpdateUser = (user: Person) => {
        setSelectedUser(user);
        setShowFormUser(true);
    }

    const handleSaveFormUser = (user: Person) => {
        dispatch(updatePerson(user))
        handleCloseFormUser();
    };
    const handleDelRelations = (id: any) => {
        dispatch(deleteRelation(id))
    }
    const handleShowRelations = async(user: any) => {
        let {payload} = await dispatch(fetchRelation({id:user.id,path:'tutor'}))
        setSelectedUser(user);
        setModalTitle('Asignar estudiante al tutor')
        setUsersToReltions(students);
        setRelations(payload);
        setShowRelations(true);
    }

    const handleCloseRelations = () => {
        setShowRelations(false);
        setSelectedUser({});
    }

    const handleSaveRelations = (data: any) => {
        let shouldDispatch = true;
    
        if (relations.length > 0) {
            relations?.map((elem) => {
                if ((elem.idTutor === data.idTutor) && (elem.idStudent === data.idStudent)) {
                    shouldDispatch = false;
                }
            });
        }
    
        if (shouldDispatch) {
            dispatch(setRelation(data));
        }
    };

    let content;

    if (usersStatus === 'loading') {
        content = <Loader show={true} />
    } else if (usersStatus === "succeeded") {
        content = 
            <Row>
        <Container>
        <Row xs={1} md={2} lg={3} xl={4} className="g-2">
        {users.map((user) => (
        <Col key={user.id}>
            <CardPerson
                user={user}
                handleUpdateUser={handleUpdateUser}
                handleShowRelations={handleShowRelations}
            />
        </Col>
    ))}
        </Row>
    </Container>
</Row>
    } else if (usersStatus === 'failed') {
        content = <p>{usersError}</p>;
    }

    return (
        <>
            <Container>
                <Row className="header">
                    <Col xs={9}>
                        <h3 className="header-title">Tutores</h3>
                        <div className="header-line"></div>
                    </Col>
                </Row>
                {content}
                <FormUsuario
                    show={showFormUser}
                    handleClose={handleCloseFormUser}
                    handleSave={handleSaveFormUser}
                    user={selectedUser}
                    setShowFormUser={setShowFormUser}
                />
                <RelationAssignStudent
                    show={showRelations}
                    title={modalTitle} 
                    handleClose={handleCloseRelations} 
                    handleSave={handleSaveRelations} 
                    handleDel={handleDelRelations}
                    user={selectedUser} 
                    users={usersToReltions} 
                    relations={relations}/>
                <UserInfo show={InfoModalState} onHide={() => dispatch(handleShowInfoModal())}/>
            </Container>
        </>
    );
}

export default Tutores;