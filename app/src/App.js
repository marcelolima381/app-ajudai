import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Redirect } from "react-router"

import "./App.css"
import Home from "./pages/home"

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          exact
          path="/home"
          component={(routeProps) => <Home {...routeProps} />}
        />
      </Switch>
    </Router>
  )
}

export default App
