import '../assets/LoginPage.css'; // Sesuaikan dengan file CSS Anda
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email dan password harus diisi.');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('Login berhasil!');
    
    // Proses login bisa dilakukan di sini
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Row className="justify-content-center w-100">
        <Col xs={12} md={6} lg={7}>
          <Card className="shadow-lg border-0 rounded login-card">
            <Card.Body className='card-body-card'>
              <h2 className="mb-4 text-center">Welcome back!</h2>

              <Form onSubmit={handleSubmit}>
                {/* Input Email */}
                <Form.Group className="mb-3 position-relative">
                  <Form.Label>Email address</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaUserAlt />
                    </span>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="login-input"
                    />
                  </div>
                </Form.Group>

                {/* Input Password */}
                <Form.Group className="mb-3 position-relative">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaLock />
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="login-input"
                    />
                  </div>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Log In
                </Button>
              </Form>

              {/* Garis Tengah dengan OR */}
              <div className='d-flex align-items-center justify-content-center or-divider my-4'>
                <hr className="divider" />
                <p className="mx-3">OR</p>
                <hr className="divider" />
              </div>

              {/* Tambahan Elemen atau API Login */}
              <div className='d-flex justify-content-center'>
                <Col lg={1}>
                  <p>apa</p>
                </Col>
                <Col lg={1}>
                  <p>apa</p>
                </Col>
                <Col lg={1}>
                  <p>apa</p>
                </Col>
                <Col lg={1}>
                  <p>apa</p>
                </Col>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;