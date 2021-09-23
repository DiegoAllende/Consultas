import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginScreen } from '../auth/LoginScreen'
import { RecoverScreen } from '../auth/RecoverScreen'
import { RegisterScreen } from '../auth/RegisterScreen'

export const AuthRouter = () => {
  console.log("routerAuth");

  return (
    <div>
      <Switch>
          <Route exact path="/auth/login" component={LoginScreen} />
          <Route exact path="/auth/register" component={RegisterScreen} />
          <Route exact path="/auth/recover" component={RecoverScreen} />
          <Redirect to="/auth/login2" />
        </Switch>
    </div>
  )
}
