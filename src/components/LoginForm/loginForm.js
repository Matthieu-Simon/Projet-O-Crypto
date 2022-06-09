import './loginFormStyles.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LoginForm() {
  return (
    <div className="container">
      <div className="register-left">
        <TextField id="outlined-basic" label="Pseudo" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Mot de passe" variant="outlined" />
        <TextField id="outlined-basic" label="Confirmer mot de passe" variant="outlined" />
        <Button variant="contained">S'enregistrer</Button>
      </div>
      <div className="register-right">
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Mot de passe" variant="outlined" />
        <Button variant="contained">Connexion</Button>
      </div>
    </div>
  );
}
export default LoginForm;
