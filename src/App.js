import React from "react"
import "./App.css"
import SquirrelPage from "./components/SquirrelPage"
import Welcome from "./Welcome"
import Stashes from "./StashPage"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import SquirrelShow from "./components/SquirrelShow"
import StashInfo from "./StashInfo"

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Router>
            <>
        <header className="app-header">
          <div className="link-hover">
          <Link  id="toplink" to={"/"}>
            🐿 SquirrelSpace
          </Link>
          </div>
          <span className="squirrel-stash">
          <Link id="stashLink" to={"/stashes"}>
            🧺 STASHES
          </Link>
          <Link id="stashLink" to={"/squirrels"}>
            🐿 SQUIRRELS
          </Link>
              </span>
        </header>
        <main>
            <Switch>
              <Route exact path="/squirrels" component={SquirrelPage} />
              <Route exact path="/stashes" component={Stashes} />
              <Route path="/stashes/:id" component={StashInfo} />
              <Route path="/squirrels/:id" component={SquirrelShow} />
              <Route exact path="/" component={Welcome} />
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
