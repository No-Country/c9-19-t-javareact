import React, { useState } from 'react';
import ButtonMain from './UI/ButtonMain';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { loginService } from '../services/loginService';
import { useAppDispatch } from '../app/hooks';

export interface FormData {
  username: string,
  password: string
}

const LoginForm = () => {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });

  const [forgotPassword, setForgotPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginValidation = (formData : FormData) =>{
    const {username,password} = formData;
    return username.length >= 4 && password.length >= 4
  }

  const handleSubmit = async() => {
     if(loginValidation(formData)){ 
      const res = await dispatch(loginService(formData))
       res ? (navigate('/dashboard')) : '' 
     }else{
      setMessage('Error, por favor, rellena los campos')
    }
  
  };

  const handleResetPassword = () => {
    console.log(formData.username);
  };

  return (
    <Form className="d-flex flex-column px-4 py-5 bg-white rounded">
      {!forgotPassword ? (
        <>
          <Form.Group className="mb-2" controlId="formBasicUsername">
            <Form.Label></Form.Label>
            <Form.Control
              type="username"
              placeholder="Ingresá tu usuario"
              name="username"
              onChange={handleOnChange}
              style={{ height: '4rem' }}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresá tu contraseña"
              name="password"
              onChange={handleOnChange}
              style={{ height: '4rem' }}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicCheckbox">
            { message ? <span>{message}</span> : <span></span> }
            
            <Button variant="disabled" onClick={() => setForgotPassword(true)}>
              ¿Olvidaste tu contraseña?
            </Button>
          </Form.Group>
          <ButtonMain
            text={'INICIAR SESIÓN'}
            size="lg"
            onClick={handleSubmit}
          />
        </>
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
      )}
    </Form>
  );
};
export default LoginForm;
