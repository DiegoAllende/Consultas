import React, { useContext } from 'react';
import './authStyle.css';
import { Button, TextField } from '@material-ui/core';
import { useFormu } from '../hooksReact/hooks/useFormu';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../hooksReact/context/AuthContext';
import { types } from '../hooksReact/types/types';
import { DATAUSER } from '../data/constantes/ui/constAuth';
import { formuGroup, validators } from '../helpers/utilformu';

const newFormu = formuGroup({
  user: ['', [validators.requerid, ()=>validators.maxLength(20)]],
  pass: ['', [validators.requerid, ()=>validators.maxLength(8)]],
});

export const LoginScreen = () => {

  const history = useHistory();
  const { authDispatch } = useContext(AuthContext);

  const { formu, handleChange, markAllTouched } = useFormu(newFormu);
  const { values, errors } = formu;
  const { user, pass } = values;

  const handleLogIn = (e) => {
    e.preventDefault();
    if (formu.valid) {
      if (values.user === 'diego' && values.pass === '123') {
        localStorage.setItem(DATAUSER, JSON.stringify(formu.values));
        authDispatch({ type: types.login });
      } else {
        console.log("Usuario no identificado.");
      }
    } else {
      markAllTouched();
    }
  }

  return (
    <section className="login" style={{ background: 'no-repeat center/cover url(./assets/img/login.jpg)' }}>
      <aside className="login-content">
        <img src="./assets/img/logo.png" alt="logo" />
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
