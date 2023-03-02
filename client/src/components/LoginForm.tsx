import React, { useState } from 'react';
import ButtonMain from './UI/ButtonMain';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginService } from '../services/loginService';
import { useAppDispatch } from '../app/hooks';
import Swal from 'sweetalert2'

export interface FormData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });
  const [forgotPassword, setForgotPassword] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginValidation = (username:string,password:string) =>{
    if((username.length > 3) && (password.length > 3)) return true
  }

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     if(loginValidation(formData.username,formData.password)){ 
      const res = await dispatch(loginService(formData))

      if(res.rol === 'ADMINISTRATOR'){navigate('/dashboard')}
      if(res.rol === 'TEACHER'){navigate('/dashboard-teacher')}
      if(res.rol === 'STUDENT'){navigate('/dashboard-student')}
      if(res.rol === 'TUTOR'){navigate('/dashboard-tutor')}
     }else{
      Swal.fire('Error','Por favor, rellena los campos','error');
      // setMessage('Error, por favor, rellena los campos')
    }
  
  };

  const handleResetPassword = () => {
    console.log(formData.username);
  };

  return (
    <Form
      className="d-flex flex-column px-4 py-5 bg-white rounded"
      onSubmit={handleSubmit}
    >
      {/*      {!forgotPassword ? ( */}
      <>
        <Form.Group className="mb-2" controlId="formBasicUsername">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="username"
            placeholder="Ingresá tu usuario"
            name="username"
            onChange={handleOnChange}
            style={{ height: '4rem' }}
            minLength={4}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
          required
            type="password"
            placeholder="Ingresá tu contraseña"
            name="password"
            onChange={handleOnChange}
            style={{ height: '4rem' }}
            minLength={4}
          />
        </Form.Group>
        {/*          <Form.Group className="mb-2" controlId="formBasicCheckbox">
            { message ? <span>{message}</span> : <span></span> }
            
            <Button variant="disabled" onClick={() => setForgotPassword(true)}>
              ¿Olvidaste tu contraseña?
            </Button>
  </Form.Group> */}
        <ButtonMain type="submit" text={'INICIAR SESIÓN'} size="lg" className='mt-4' />
      </>
      {/*
      ) : (
        <>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <p style={{ margin: 0 }}>
              Te enviaremos a tu correo electrónico las instrucciones sobre como
              restablecer tu contraseña.
            </p>
            <Form.Label></Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresá tu email"
              name="email"
              onChange={handleOnChange}
              style={{ height: '4rem' }}
            />
          </Form.Group>

          <ButtonMain
            text={'RESTABLECER CONTRASEÑA'}
            size="lg"
            onClick={handleResetPassword}
            className="mt-2"
          />
          <Form.Group className="mt-2" controlId="formBasicCheckbox">
            <Button variant="disabled" onClick={() => setForgotPassword(false)}>
              ¿Deseas iniciar sesión?
            </Button>
          </Form.Group>
        </>
      )}*/}
    </Form>
  );
};
export default LoginForm;
