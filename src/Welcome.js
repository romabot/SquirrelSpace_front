import React from "react"
import { Link } from "react-router-dom"

class Welcome extends React.Component {
  render() {
    return (
      <>
        <div className="welcome-title">
          <img id="squirrel-logo" alt="" src="https://i.imgur.com/ZFoyNCS.png"></img>
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
