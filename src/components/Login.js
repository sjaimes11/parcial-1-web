import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'; // Importar para traducir
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import './Login.css'; // CSS personalizado para estilos adicionales

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
      <h1 className="text-center">
        <FormattedMessage id="app.title" />
      </h1>
      <img className="banner-image" src="/image 4.png" alt="Robot Banner" />

      <Form onSubmit={handleLogin} className="login-form">
        <h3 className="text-center">
          <FormattedMessage id="login.title" />
        </h3>

        <Form.Group controlId="formUsername">
          <Form.Label>
            <FormattedMessage id="login.username" />
          </Form.Label>
          <Form.Control 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>
            <FormattedMessage id="login.password" />
          </Form.Label>
          <Form.Control 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </Form.Group>

        {error && <Alert variant="danger">
          <FormattedMessage id="login.error" />
        </Alert>}

        <div className="button-group">
          <Button variant="primary" type="submit">
            <FormattedMessage id="login.submit" />
          </Button>
          <Button variant="danger" type="button">
            <FormattedMessage id="login.cancel" />
          </Button>
        </div>
      </Form>

      <footer className="text-center">
        <p><FormattedMessage id="footer.contact" /></p>
      </footer>
    </div>
  );
}

export default Login;
