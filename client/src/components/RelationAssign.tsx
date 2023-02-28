import { useState, useEffect } from "react";
// Models
import { User } from "../models/User";
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

import { getRelationsStatus } from "../app/states/Relation";
import { useAppSelector } from "../app/hooks";

export interface Props {
  show: boolean;
  title: string;
  user: User;
  relations: Array<any>;
  users: Array<User>;
  handleClose: () => void;
  handleSave: (value: Array<User>) => void;
  handleDel: (id: number) => void;
  handleFetch: (id: number, path: string) => void;
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
  idStudent: string | number | undefined;
  idTutor: string | number | undefined;
  relation: string | undefined;
}

function RelationAssign({
  show,
  title,
  user,
  relations,
  users,
  handleClose,
  handleSave,
  handleDel,
}: Props) {
  const [newRelations, setNewRelations] = useState<Array>([]);
  const [newBond, setBond] = useState<string | undefined>(undefined);
  const [isAdded, setAdded] = useState<Boolean>(false);
  const relationStatus = useAppSelector(getRelationsStatus);

  useEffect(() => {
    setNewRelations(relations);
  }, [relations]);

  const handleCloseModal = () => {
    handleClose();
  };
  const handleSaveData = () => {
    if (newRelations.length !== 0 && newBond !== undefined) {
      console.log("aca", newRelations, user);
      let relation: bondProps = {
        idStudent: user.rol_id === "student" ? newRelations[1].id : user.id,
        idTutor: user.rol_id === "student" ? user.id : newRelations[1].idTutor,
        relation: newBond,
      };
      console.log("handleSave argument:", relation);
      handleSave(relation);
    }
  };

  const handleChange = (e: { target: { value: string | undefined } }) => {
    console.log(e.target)
    let user = users.find((elem) => elem.id === Number(e.target.value));
    console.log(newRelations)
    if (user) {
      console.log(relations)
      setNewRelations([
        ...newRelations,
        {
          fullNameTutor: user.fullName,
          idTutor: user.id,
          relation: newBond,
        },
      ]);
    }

    /*      if(user && newBond){
        console.log('llega a entrar',newRelations)
        handleSave({
            idStudent: user.id,
            idTutor: newRelations.idTutor,
            relation: newBond,
        })
            
    }  */
  
  };
  const handleChangeRelation = (e: { target: { value: number } }) => {
    if (e.target.value !== undefined) {
      setBond(bonds[e.target.value - 1].name);
    }
  };

  const onClickDeleteRelation = (id: number) => {
    handleDel(id);
    setAdded(true);
    setNewRelations(relations.filter((r) => console.log(r)));
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
                      {user.rol_id
                        ? user.rol_id === "2"
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
            {newRelations.length > 0 && (
              <Container>
                <ListGroup>
                  {newRelations.map(
                    ({
                      fullNameStudent,
                      fullNameTutor,
                      idRelation,
                      idStudent,
                      idTutor,
                      relation,
                    }: any) => (
                      <>
                        <ListGroup.Item
                          key={1}
                          className="d-flex justify-content-between align-items-center mt-2"
                        >
                          {fullNameTutor} ({relation})
                          <div className="d-flex justify-content-right">
                            {idRelation ? (
                              <Button
                                className="mr-1"
                                key={1}
                                style={{ height: "fit-content" }}
                                variant="danger"
                                size="sm"
                                onClick={() =>
                                  onClickDeleteRelation(idRelation)
                                }
                              >
                                <i className="fa fa-trash"></i>
                              </Button>
                            ) : (
                              ""
                            )}
                            {console.log(
                              fullNameStudent,
                              fullNameTutor,
                              idRelation,
                              idStudent,
                              idTutor,
                              relation
                            )}
                            <Button
                              className="mr-1"
                              key={2}
                              style={{
                                height: "fit-content",
                                marginLeft: "8px",
                              }}
                              variant="warning"
                              size="sm"
                              onClick={() =>
                                handleSave({
                                  idStudent: user.id,
                                  idTutor: idTutor,
                                  relation: newBond,
                                })
                              }
                            >
                              <i className="fa fa-save"></i>
                            </Button>
                          </div>
                        </ListGroup.Item>
                      </>
                    )
                  )}
                </ListGroup>
              </Container>
            )}
          </Container>
        </Modal.Body>

        {/*         <Modal.Footer>
          <ButtonSecondary
            text={"Cancelar"}
            size="md"
            icon="fa fa-times"
            onClick={handleCloseModal}
          />
          <ButtonMain
            text={"Guardar"}
            size="md"
            icon="fa fa-save"
            onClick={handleSaveData}
          />
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default RelationAssign;
