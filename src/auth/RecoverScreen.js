import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useFormu } from '../hooks/useFormu';
import { useHistory } from 'react-router-dom';

export const RecoverScreen = () => {
  const InitialFormu = { pass: '' };
  const validationsForm = (formu) => {
    const errorsAux = {};
    return errorsAux;
  }

  const history = useHistory();
  const { formu, errors, handleChange } = useFormu(InitialFormu, validationsForm);
  const { pass } = formu;

  const handleRecover = (e) => {
    e.preventDefault();
    console.log("formu: ", formu);
  }

  return (
    <section className="login">
      <aside className="login-content">
        <img src="./assets/img/logo.png" title="logo" alt="logo"/>
        <h3>RECUPERAR CONTRASEÑA</h3>
        <form autoComplete="off" noValidate onSubmit={handleRecover}>
          <TextField onChange={handleChange} value={pass} name="pass" error={errors?.pass} helperText={errors?.pass} label="Correo" variant="outlined" size="small" fullWidth />
          <Button type="submit" variant="contained" color="primary" fullWidth >Recuperar</Button>
          <Button variant="contained" color="primary" onClick={() => history.push('/auth/login')} fullWidth>Login</Button>
        </form>
      </aside>
    </section>
  )
}
