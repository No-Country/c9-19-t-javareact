import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from '../../app/hooks';
import { deletePerson } from '../../app/states/Persons';
import { Person } from '../../models/Person';


interface Props {
  show: boolean;
  onHide: () => void;
  closeForm: () => void;
  setShowFormUser: React.Dispatch<React.SetStateAction<boolean>>;
  user: Person;
}

const DeleteAlert: React.FC<Props> = (props) => {
  const { user, closeForm, setShowFormUser, ...other } = props

  const dispatch = useAppDispatch()

  const handleDelete = () => {
    dispatch(deletePerson(user))
    props.onHide()
    closeForm()
  }

  return (
    <>
      <Modal
        {...other}
        size="xs"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Precaución
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Esta seguro que desea eliminar el usuario? Esta acción no se puede deshacer.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {
            setShowFormUser(true)
            props.onHide()
          }}>Cancelar</Button>
          <Button variant='danger' onClick={handleDelete}>Eliminar usuario</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default DeleteAlert;
