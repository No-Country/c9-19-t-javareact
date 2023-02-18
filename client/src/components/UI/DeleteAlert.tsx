import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from '../../app/hooks';
import { deleteUser } from '../../app/states/users';


interface Props {
  show: boolean;
  onHide: () => void;
  closeForm: () => void;
  setShowFormUser: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
}

const DeleteAlert: React.FC<Props> = (props) => {
  const { userId, closeForm, setShowFormUser, ...other } = props

  const dispatch = useAppDispatch()

  const handleDelete = () => {
    console.log(userId)
    dispatch(deleteUser(userId))
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
