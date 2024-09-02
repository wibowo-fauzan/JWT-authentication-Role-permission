import '../assets/Regster.css'; // Sesuaikan dengan file CSS Anda
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { FaUserAlt, FaLock, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderLogin from '../components/ HeaderLogin';

const Regster = () => {
  const [nama_lengkap, setNamaLengkap] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [nomor_telpon, setNomorTelpon] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !nama_lengkap || !username || !nomor_telpon ) {
      setError('Semua field harus diisi.');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('Registrasi berhasil!');
    
    // Proses registrasi bisa dilakukan di sini
    console.log('Nama Lengkap:', nama_lengkap);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Nomor Telpon:', nomor_telpon);
    console.log('Password:', password);
  };

  return (
    <>
      <HeaderLogin />
      <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-light card-minus">
        <Row className="justify-content-center w-100">
          <Col xs={12} md={6} lg={7}>
            <Card className="shadow-lg border-0 rounded login-card">
              <Card.Body className='card-body-card'>
                <h2 className="mb-4 text-center">Register</h2>

                <Form onSubmit={handleSubmit}>
                  {/* Nama Lengkap */}
                  <Form.Group className="mb-3 position-relative">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaUserAlt />
                      </span>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan nama lengkap"
                        value={nama_lengkap}
                        onChange={(e) => setNamaLengkap(e.target.value)}
                        className="login-input p-2 fs-5"
                      />
                    </div>
                  </Form.Group>

                  {/* Username */}
                  <Form.Group className="mb-3 position-relative">
                    <Form.Label>Username</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaUserAlt />
                      </span>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="login-input p-2 fs-5"
                      />
                    </div>
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3 position-relative">
                    <Form.Label>Email</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaEnvelope />
                      </span>
                      <Form.Control
                        type="email"
                        placeholder="Masukkan email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input p-2 fs-5"
                      />
                    </div>
                  </Form.Group>

                  {/* Nomor Telpon */}
                  <Form.Group className="mb-3 position-relative">
                    <Form.Label>Nomor Telpon</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaPhoneAlt />
                      </span>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan nomor telpon"
                        value={nomor_telpon}
                        onChange={(e) => setNomorTelpon(e.target.value)}
                        className="login-input p-2 fs-5"
                      />
                    </div>
                  </Form.Group>

                  {/* Password */}
                  <Form.Group className="mb-3 position-relative">
                    <Form.Label>Password</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FaLock />
                      </span>
                      <Form.Control
                        type="password"
                        placeholder="Masukkan password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input p-2 fs-5"
                      />
                    </div>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 mt-3 p-2 fw-bold fs-5 rounded">
                    Register
                  </Button>
                </Form>

                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Regster;
