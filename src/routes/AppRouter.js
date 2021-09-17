import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { PagesRouter } from './PagesRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
  const valLogin = false;
  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter isAuthenticated={valLogin} path="/auth" component={AuthRouter}/>
          <PrivateRouter isAuthenticated={valLogin} path="/" component={PagesRouter}/>
          <Redirect to="/auth" />
        </Switch>
      </div>
    </Router>
  )
}
