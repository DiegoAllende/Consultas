import React from 'react';
import './authStyle.css';
import { Button, TextField } from '@material-ui/core';
import { useFormu } from '../hooks/useFormu';
import { useHistory } from 'react-router-dom';

export const LoginScreen = () => {
  const InitialFormu = { user: '', pass: '' };

  const validationsForm = (formu) => {
    const errorsAux = {};

    if (!formu.user.trim()) {
      errorsAux.user = 'El campo usuario es obligatorio.';
    }

    if (!formu.pass.trim()) {
      errorsAux.pass = 'El campo contraseña es obligatorio.';
    }

    return errorsAux;
  }

  const history = useHistory();
  const { formu, errors, handleChange } = useFormu(InitialFormu, validationsForm);
  const { user, pass } = formu;

  const handleLogIn = (e) => {
    e.preventDefault();
    console.log("formu: ", formu);
  }

  return (
    <section className="login" style={{background: 'no-repeat center/cover url(./assets/img/login.jpg)'}}>
      <aside className="login-content">
        <img src="./assets/img/logo.png" title="logo public" alt="log2o" />
        <h3>MI CUENTA</h3>
        <form autoComplete="off" noValidate onSubmit={handleLogIn}>
          <TextField onChange={handleChange} value={user} name="user" error={errors?.user ? true : false} helperText={errors?.user} label="Usuario" variant="outlined" size="small" fullWidth />
          <TextField onChange={handleChange} value={pass} name="pass" error={errors?.pass ? true : false} helperText={errors?.pass} label="Contraseña" variant="outlined" size="small" fullWidth />
          <Button type="submit" variant="contained" color="primary" fullWidth >Entrar</Button>
          <Button variant="contained" color="primary" onClick={() => history.push('/auth/register')} fullWidth>Registrarse</Button>
          <Button variant="outlined" color="primary" onClick={() => history.push('/auth/recover')} fullWidth>Recuperar Contraseña</Button>
        </form>
      </aside>
    </section>
  )
}
