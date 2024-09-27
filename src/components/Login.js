import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import './Login.css'; // This will be your custom CSS file for additional styling

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      login: username,
      password: password
    };

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.status === 200) {
        navigate('/robots');
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      setError(true);
    }
  };

  return (
    <div className="login-container">
      <h1 className="text-center">Adopta un Robot con Robot Lovers!</h1>
      <img className="banner-image" src="/image 4.png" alt="Robot Banner" />

      
      <Form onSubmit={handleLogin} className="login-form">
        <h3 className="text-center">Inicio de sesión</h3>

        <Form.Group controlId="formUsername">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        {error && <Alert variant="danger">Invalid credentials</Alert>}

        <div className="button-group">
          <Button variant="primary" type="submit">Ingresar</Button>
          <Button variant="danger" type="button">Cancelar</Button>
        </div>
      </Form>

      <footer className="text-center">
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
}

export default Login;
