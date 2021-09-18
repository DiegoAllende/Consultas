import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react'
import { TitleSection } from '../../components/sections/TitleSection';
import { useFormu } from '../../hooksReact/hooks/useFormu';

export const UsuarioPage = () => {
  const InitialFormu = { nombre: '', apellido: '', user: '', pass: '' };

  const validationsForm = (formu) => {
    const errorsAux = {};
    return errorsAux;
  }

  const { formu, errors, handleChange } = useFormu(InitialFormu, validationsForm);
  const { nombre, apellido, user, pass } = formu;

  const handleFormu = (e) => {
    e.preventDefault();
    console.log("formu: ", formu);
  }
  return (
    <div>
      <TitleSection title="USUARIO" />

      <section>
        <form autoComplete="off" noValidate onSubmit={handleFormu}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField onChange={handleChange} value={nombre} name="nombre" error={errors?.nombre ? true : false} helperText={errors?.nombre} label="Nombres" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField onChange={handleChange} value={apellido} name="apellido" error={errors?.apellido ? true : false} helperText={errors?.apellido} label="Apellidos" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField onChange={handleChange} value={user} name="user" error={errors?.user ? true : false} helperText={errors?.user} label="Usuario" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField onChange={handleChange} value={pass} name="pass" error={errors?.pass ? true : false} helperText={errors?.pass} label="Contraseña" variant="outlined" size="small" fullWidth />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" spacing={4}>
            <Grid item>
              <Button variant="contained" color="primary">Nuevo</Button>
            </Grid>
            <Grid item>
              <Button onClick={handleFormu} variant="outlined" color="primary">Guardar</Button>
            </Grid>
          </Grid>
        </form>
      </section>

      <section>
        <h2>TABLA</h2>
      </section>

    </div>
  )
}
