import React from "react"
import "./App.css"
import SquirrelPage from "./components/SquirrelPage"
import Welcome from "./Welcome"
import Stashes from "./StashPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Info from "./Info"


class App extends React.Component {
  render() {
    return (
      <div className="App">
      
        <header className="app-header"></header>
        <main>
        
          <Router>
            <Switch>
              <Route exact path="/"component={Welcome} />
              <Route exact path="/squirrels"component={SquirrelPage} />
              <Route exact path="/stashes"component={Stashes} />
              <Route path="/info/:id" component={Info} />
            </Switch>
          </Router>
        </main>
        <footer>&copy; 2019 ROMA</footer>
      </div>
    )
  }
}

export default App
