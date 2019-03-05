import React from "react"
import "./App.css"
import SquirrelPage from "./components/SquirrelPage"
import Welcome from "./Welcome"
import Stashes from "./StashPage"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Info from "./Info"
import StashInfo from "./StashInfo"

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Router>
            <>
        <header className="app-header">
          <Link id="toplink" to={"/"}>
            🐿 SquirrelSpace
          </Link>
          <Link id="stashLink" to={"/stashes"}>
            🧺 STASHES
          </Link>
        </header>
        <main>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/squirrels" component={SquirrelPage} />
              <Route exact path="/stashes" component={Stashes} />
              <Route path="/stashes/:id" component={StashInfo} />
              <Route path="/info/:id" component={Info} />
            </Switch>
        </main>
        <footer>&copy; 2019 ROMA</footer>
        </>
          </Router>
      </div>
    )
  }
}

export default App
