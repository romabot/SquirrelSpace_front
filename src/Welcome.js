import React from "react"
import { Link } from "react-router-dom"

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome-div">
      
          <img
            id="squirrel-logo"
            alt=""
            src="https://i.imgur.com/ZFoyNCS.png"
          ></img>
        
        <Link to={"/squirrels"}>
          <img
            className="welcome-img hovers"
            alt="SquirrelSpace"
            src="http://eskipaper.com/images/squirrel-wallpaper-9.jpg"
          />
        </Link>
      </div>
    )
  }
}

export default Welcome
