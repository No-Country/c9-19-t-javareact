import React, { useState, useEffect } from "react";
// Models
import { FamilyRelationship } from "../models/FamilyRelationship";
import { Person } from "../models/Person";
// UI
import ButtonMain from "./UI/ButtonMain";
import ButtonSecondary from "./UI/ButtonSecondary";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import { getRelationsStatus, selectRelations } from "../app/states/Relation";
import { useAppSelector } from "../app/hooks";

export interface Props {
  show: boolean;
  title: string;
  user: Person;
  relations: Array<FamilyRelationship>;
  users: Array<Person>;
  handleClose: () => void;
  handleSave: (value: FamilyRelationship) => void;
  handleDel: (id: number) => void;

}
export const bonds = [
  { id: 1, name: "FATHER" },
  { id: 2, name: "MOTHER" },
  { id: 3, name: "BROTHER" },
  { id: 4, name: "SISTER" },
  { id: 5, name: "GRANDFATHER" },
  { id: 6, name: "GRANDMOTHER" },
  { id: 7, name: "AUNT" },
  { id: 8, name: "UNCLE" },
  { id: 9, name: "COUSIN" },
  { id: 10, name: "FRIEND" },
  { id: 11, name: "LEGAL_GUARDIAN" },
  { id: 12, name: "NEIGHBOR" },
];

export interface bondProps {
  idStudent:  number | string;
  idTutor:  number | undefined;
  relation: string | undefined;
}

function RelationAssignStudent({
  show,
  title,
  user,
  relations,
  users,
  handleClose,
  handleSave,
  handleDel,
}: Props) {
  const [newRelations, setNewRelations] = useState<Array<any>>([]);
  const [newBond, setBond] = useState<string | undefined>(undefined);
  const [isAdded, setAdded] = useState<Boolean>(false);
  const relationsStatus = useAppSelector(selectRelations)



  const handleCloseModal = () => {
    handleClose();
  };

  const handleChange = (e: { target: { value: number | undefined } }) => {
    let userFilter = users.find((elem) => elem.id === Number(e.target.value));
    let idStudent = user.roleName === 'STUDENT' ? user.id : userFilter!.id;
    let idTutor = user.roleName === 'TUTOR' ? user.id : userFilter!.id;
    let relation= {
      idStudent:idStudent,
      idTutor:idTutor,
      relation:newBond
    }
    console.log(newBond)
    if (user && newBond) {  
      handleSave(relation)  
      setAdded(false)
      setBond(undefined)
    }  
  };
  const handleChangeRelation = (e: { target: { value: number } }) => {
    if (e.target.value !== undefined) {
      setBond(bonds[e.target.value - 1].name);
    }
  };
  const onClickDeleteRelation = (id: number) => {
    handleDel(id);
    setAdded(true);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseModal}
        keyboard={false}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <Form>
              <Row>
                {/* ADDING BONDS */}
                <Col xs={12} md={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Asignar parentesco</Form.Label>
                    <Form.Select
                      name="comision_id"
                      onChange={handleChangeRelation}
                      value={""}
                      /*  disabled={newBond.id ? false : false}  */
                    >
                      <option>
                        {newBond ? newBond : "--Seleccione una opción -- "}
                      </option>
                      {bonds.map((elem) => (
                        <option key={elem.id} value={elem.id}>
                          {" "}
                          {elem.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} md={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Asignar{" "}
                      {user.roleName
                        ? user.roleName === "STUDENT"
                          ? "estudiante"
                          : "tutor"
                        : "entidad"}
                    </Form.Label>
                    <Form.Select
                      name="comision_id"
                      onChange={handleChange}
                      value={""}
                      /*                       disabled={
                        (user.rol_id === "3" || user.rol_id === undefined) &&
                        newRelations.length === 1
                      } */
                    >
                      <option>--Seleccione una opción --</option>
                      {users.map((elem) => (
                        <option key={elem.id} value={elem.id}>
                          {" "}
                          {elem.fullName}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            {relationsStatus !== undefined && (
              <Container>
  <ListGroup>
    {relationsStatus.map(
      ({
        fullNameStudent,
        fullNameTutor,
        idRelation,
        idStudent,
        idTutor,
        relation,
        id
      }: any) => {
        // Agrega la condición aquí
        if ((idStudent === user.id)||(idTutor === user.id)) {
          return (
            <ListGroup.Item
              key={id}
              className="d-flex justify-content-between align-items-center mt-2"
            >
              {user.roleName === 'TUTOR' ? fullNameStudent:fullNameTutor} ({relation})
              <div className="d-flex justify-content-right">
                <Button
                  className="mr-1"
                  key={1}
                  style={{ height: "fit-content" }}
                  variant="danger"
                  size="sm"
                  onClick={() =>
                    onClickDeleteRelation(id)
                  }
                >
                  <i className="fa fa-trash"></i>
                </Button>
              </div>
            </ListGroup.Item>
          );
        } else {
          return null; // Si el idStudent no coincide con user.id, no muestra nada
        }
      }
    )}
  </ListGroup>
</Container>
            )}
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RelationAssignStudent;