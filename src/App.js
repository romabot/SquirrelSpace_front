import React from "react"
import "./App.css"
// import SquirrelPage from "./components/SquirrelPage"   
import Welcome from "./Welcome"
// import Stashes from "./StashPage"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
// import SquirrelShow from "./components/SquirrelShow"
// import StashInfo from "./StashInfo"
// import HabitaryPage from "../src/"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <header className="app-header">
              <div className="link-hover">
              </div>
            </header>
            <main>
              <Switch>
                <Welcome/>
              </Switch>
            </main>
            {/* <footer>&copy; 2019 ROMA</footer> */}
          </>
        </Router>
      </div>
    )
  }
}

export default App
