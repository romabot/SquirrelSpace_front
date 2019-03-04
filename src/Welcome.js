import React from 'react';
import { Link } from 'react-router-dom' 

class Welcome extends React.Component {
    render() {
        return (
            <>
            <Link to={"/squirrels"}>ENTER</Link>
            <h1>🌈WELCOME TO 🐿SQUIRRELSPACE!</h1> 
            <img className="welcome-img" alt="SquirrelSpace" src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-305430.jpg" />
            </>
        )
    }
}






export default Welcome 