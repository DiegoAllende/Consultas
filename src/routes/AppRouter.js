import React, { useContext } from 'react'
import { HashRouter, Switch, Redirect } from 'react-router-dom'
import { AuthContext } from '../hooksReact/context/AuthContext'
import { AuthRouter } from './AuthRouter'
import { PagesRouter } from './PagesRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
export const AppRouter = () => {
  console.log("routerApp");
  const {auhtState} = useContext(AuthContext)

  return (
    <HashRouter>
      <div>
        <Switch>
          <PublicRouter isAuthenticated={auhtState.logged} path="/auth" component={AuthRouter}/>
          <PrivateRouter isAuthenticated={auhtState.logged} path="/" component={PagesRouter}/>
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </HashRouter>
  )
}
