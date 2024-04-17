import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Crosshair2, Pass } from 'react-bootstrap-icons';
import axios from '../../api/axios';
import HeadingProfileComp from '../../components/profile/HeadingProfileComp';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate passwords
    if (newPassword !== confirmPassword) {
      setError('Le nuove password non corrispondono');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/changepassword', {
        password: newPassword,
        password_confirmation: confirmPassword,
      });

      setSuccess(true);
    } catch (error) {
      setError('Errore durante il cambio password. Assicurati di aver inserito la password corrente correttamente.');
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/deleteUser', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess(true);
    } catch (error) {
      setError('Errore durante l\'eliminazione dell\'account.');
    }
  };

  return (
    <>
    <HeadingProfileComp />
      <Container fluid className='bg-secondary p-5'>
        <h2 className="fw-semibold text-primary">Gestione profilo</h2>

        <div className='ms-5 pt-4'>
          <h5 className="fw-semibold d-flex align-items-center"><Pass className='me-2' /> Cambia password</h5>
          <Form onSubmit={handleChangePassword}>
            <Form.Group controlId="currentPassword">
              <Form.Label>Password corrente</Form.Label>
              <Form.Control
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="newPassword">
              <Form.Label>Nuova password</Form.Label>
              <Form.Control
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Conferma nuova password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">Password cambiata con successo!</p>}
            <Button variant="primary" type="submit" className='mt-3'>
              Cambia password
            </Button>
          </Form>
        </div>

        <div className='mt-5 ms-5'>
          <h5 className="fw-semibold text-danger d-flex align-items-center"><Crosshair2 className='me-2' /> ELIMINA ACCOUNT</h5>
          {error && <p className="text-danger">{error}</p>}
          {success && <p className="text-success">Account eliminato con successo!</p>}
          <Button variant='danger' onClick={handleDelete}>CONFERMA</Button>
        </div>
      </Container>
    </>
  );
}
