import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { DashboardScreen } from '../pages/DashboardScreen'

export const PagesRouter = () => {
  return (
    <div>
      <Switch>
          <Route exact path="/" component={DashboardScreen} />
          <Redirect to="/" />
        </Switch>
    </div>
  )
}
