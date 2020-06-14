import React, { Component } from 'react'
import Show from './components/Show'
import Create from './components/Create'
import Edit from './components/Edit'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >
          <NavBar />
          <div className="container my-4 p-3">
            <Switch>
              <Route exact path="/" component={Show} />
              <Route exact path="/create" ><Create /></Route>
              <Route exact path="/edit/:id" component={Edit} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
