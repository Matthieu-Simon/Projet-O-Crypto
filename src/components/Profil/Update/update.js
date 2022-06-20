/* eslint-disable max-len */
import './updateStyles.scss';
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import heroku from '../../../config/api/heroku';
import authService from '../../LoginForm/auth.service';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  textAlign: 'center',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: '#424C7C',
};

export default function Update() {
  const { user } = authService.getCurrentUser();
  const [nickname, setNickname] = useState(user?.pseudo);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitNickname = (e) => {
    e.preventDefault();
    heroku.patch(`/profile/${user.id}`, {
      nickname,
    }).then((res) => {
      console.log(res);
      console.log(res.data.user.pseudo);
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    heroku.patch(`profile/${user.id}`, {
      email,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    heroku.patch(`profile/${user.id}`, {
      password,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteAccount = (e) => {
    e.preventDefault();
    heroku.delete(`/profile/${user.id}`)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Button onClick={handleOpen}>Modifier</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modifier vos informations personnelles
          </Typography>
          <Typography component="h3" id="modal-modal-description" sx={{ mt: 2 }}>
            <p>
              <form>
                <input className="input-modifier" type="text" placeholder="Pseudo" onChange={(e) => setNickname(e.target.value)} onSubmit={handleSubmitNickname} />
                <button className="button-modifier" type="submit">Valider</button>
              </form>
              <form>
                <input className="input-modifier" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} onSubmit={handleSubmitEmail} />
                <button className="button-modifier" type="submit">Valider</button>
              </form>
              <form>
                <input className="input-modifier" type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} onSubmit={handleSubmitPassword} />
                <button className="button-modifier" type="submit">Valider</button>
              </form>
              <form>
                <button className="button-modifier delete-account" type="submit" onClick={handleDeleteAccount}>Supprimer mon compte</button>
              </form>
            </p>
          </Typography>
          <Button onClick={handleClose}>Fermer</Button>
        </Box>
      </Modal>
    </div>

  );
}
