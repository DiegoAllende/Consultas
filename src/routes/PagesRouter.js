import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Menu } from '../components/share/Menu'
import { DashboardScreen } from '../pages/DashboardScreen'
import { FormaPagoPage } from '../pages/mantenimiento/FormaPagoPage'
import { UsuarioPage } from '../pages/mantenimiento/UsuarioPage'

export const PagesRouter = () => {
  console.log("routerPages");

  return (
    <div>
      <Menu />
      <main className="content-pages">
        <Switch>
          <Route exact path="/" component={DashboardScreen} />
          <Route exact path="/usuario" component={UsuarioPage} />
          <Route exact path="/forma-pago" component={FormaPagoPage} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  )
}
