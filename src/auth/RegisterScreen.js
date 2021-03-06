import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useFormu } from '../hooksReact/hooks/useFormu';
import { useHistory } from 'react-router-dom';

export const RegisterScreen = () => {
  const InitialFormu = { user: '', pass: '', pass2: '' };
  const validationsForm = (formu) => {
    const errorsAux = {};
    return errorsAux;
  }

  const history = useHistory();
  const { formu, errors, handleChange } = useFormu(InitialFormu, validationsForm);
  const { user, pass, pass2 } = formu;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("formu: ", formu);
  }

  return (
    <section className="login" style={{background: 'no-repeat center/cover url(./assets/img/login.jpg)'}}>
      <aside className="login-content">
        <img src="./assets/img/logo.png" title="logo" alt="logo"/>
        <h3>REGISTRO</h3>
        <form autoComplete="off" noValidate onSubmit={handleRegister}>
          <TextField onChange={handleChange} value={user} name="user" error={errors?.user} helperText={errors?.user} label="Usuario" variant="outlined" size="small" fullWidth />
          <TextField onChange={handleChange} value={pass} name="pass" error={errors?.pass} helperText={errors?.pass} label="Contraseña" variant="outlined" size="small" fullWidth />
          <TextField onChange={handleChange} value={pass2} name="pass2" error={errors?.pass2} helperText={errors?.pass2} label="Repetir Contraseña" variant="outlined" size="small" fullWidth />
          <Button type="submit" variant="contained" color="primary" fullWidth >Registrar</Button>
          <Button variant="contained" color="primary" onClick={() => history.push('/auth/login')} fullWidth>Login</Button>
        </form>
      </aside>
    </section>
  )
}
