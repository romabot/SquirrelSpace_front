import React from "react"
import { Link } from "react-router-dom"

class Welcome extends React.Component {
  render() {
    return (
      <>
        <div className="welcome-title">
          <Link id="welcomess" to={"/squirrels"}>
            <span role="img" aria-label="rainbow">
              🌈
            </span>
            WELCOME TO SQUIRRELSPACE
          </Link>
        </div>
        <Link to={"/squirrels"}>
          <img
            className="welcome-img hovers"
            alt="SquirrelSpace"
            src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-305430.jpg"
          />
        </Link>
      </>
    )
  }
}

export default Welcome
