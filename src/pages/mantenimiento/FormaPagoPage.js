import React from 'react'
import { useFormu } from '../../hooksReact/hooks/useFormu';
import { TitleSection } from '../../components/sections/TitleSection'
import { Button, Grid, TextField } from '@material-ui/core';

export const FormaPagoPage = () => {
  const InitialFormu = { user: '', pass: '' };

  const validationsForm = (formu) => {
    const errorsAux = {};
    return errorsAux;
  }

  const { formu, errors, handleChange } = useFormu(InitialFormu, validationsForm);
  const { user, pass } = formu;

  const handleFormu = (e) => {
    e.preventDefault();
    console.log("formu: ", formu);
  }

  return (
    <div>
      <TitleSection title="FORMA DE PAGO" />

      <section>
        <form autoComplete="off" noValidate onSubmit={handleFormu}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <TextField onChange={handleChange} value={user} name="user" error={errors?.user ? true : false} helperText={errors?.user} label="Forma de Pago" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField onChange={handleChange} value={pass} name="pass" error={errors?.pass ? true : false} helperText={errors?.pass} label="Descripción" variant="outlined" size="small" fullWidth />
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
