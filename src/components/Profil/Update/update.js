/* eslint-disable max-len */
import './updateStyles.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                <input className="input-modifier" type="text" placeholder="Pseudo" />
                <button className="button-modifier" type="submit">Valider</button>
              </form>
              <form>
                <input className="input-modifier" type="email" placeholder="Email" />
                <button className="button-modifier" type="submit">Valider</button>
              </form>
              <form>
                <input className="input-modifier" type="password" placeholder="Mot de passe" />
                <button className="button-modifier" type="submit">Valider</button>
              </form>
            </p>
          </Typography>
          <Button onClick={handleClose}>Fermer</Button>
        </Box>
      </Modal>
    </div>

  );
}