import { useEffect, useLayoutEffect, useState } from 'react';

// Models
import { User } from './models/User';

// compoents
import FormUsuario from './components/formUsuario';

// UI
import Button from 'react-bootstrap/Button';

function App() {

  const [showFormUser, setShowFormUser] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User>(new User());

  useEffect(() => {
    setSelectedUser(User.parseItem(new User()))
  }, [])
  
  const handleShowFormUser = () => {
    setShowFormUser(true);
  }

  const handleCloseFormUser = () => {
    setShowFormUser(false);
    setSelectedUser(new User())
  }

  const handleUpdateUsuario = () => {
    let user = User.parseItem(
                              {'id': 1,
                              'rol_id': 1,
                              'name': 'Juan Pablo',
                              'last_name': 'Diaz',
                              'dni': '40852741',
                              'username': '40852741',
                              'password': 'password',}
                            );
            
    setSelectedUser(user);
    handleShowFormUser();
  }

  const handleSaveFormUser = (user: User) => {
    if (user.id === undefined) {
      console.log('Guardo');
      console.log(user);
    } else {
      console.log('Modifico');
      console.log(user);
    }
    handleCloseFormUser();
  }

  return (
    <>
      <div>
        <h1>Good Learner</h1>
          <Button variant="primary" onClick={handleShowFormUser}>
            Agregar Usuario
          </Button>
          <Button variant="warning" onClick={handleUpdateUsuario}>
            Modificar Usuario
          </Button>
          <FormUsuario show={showFormUser} handleClose={handleCloseFormUser} handleSave={handleSaveFormUser} user={selectedUser}/>
      </div>


     
    </>
  );
}

export default App;
