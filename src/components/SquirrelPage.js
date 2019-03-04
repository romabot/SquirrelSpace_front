import React from "react"
import SquirrelList from "./SquirrelList"
import MySquirrels from "./MySquirrels"
import { Link } from 'react-router-dom' 

class SquirrelPage extends React.Component {
  state = {
    allSquirrels: [],
    mySquirrels: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/squirrels")
      .then(res => res.json())
      .then(allSquirrels => {
        this.setState({ allSquirrels })
      })
  }

  catchSquirrel = squirrelObj => {
    squirrelObj.caught = true

    this.setState({
      allSquirrels: this.state.allSquirrels.filter(squirrel => squirrel.id !== squirrelObj.id)
    })

    let squirrelFav = this.state.mySquirrels.find(
      squirrel => squirrel.id === squirrelObj.id
    )
    if (!squirrelFav) {
      this.setState({
        mySquirrels: [...this.state.mySquirrels, squirrelObj]
      })
    }
  }

  removeSquirrel = squirrelObj => {
    squirrelObj.caught = false 

    this.setState({
      allSquirrels: [squirrelObj,...this.state.allSquirrels]
    })

    this.setState({
      mySquirrels: this.state.mySquirrels.filter(squirrel => squirrel.id !== squirrelObj.id )
    })
  }


  render() {
    return (
      <>
        <Link to={"/"}>HOME</Link>
        <h1 className="main-logo">🐿 SquirrelSpace</h1>
        <div className="squirrels-container">
          <SquirrelList
            className="squirrel-list"
            allSquirrels={this.state.allSquirrels}
            clickSquirrel={this.catchSquirrel}
          />
          <MySquirrels 
            className="squirrel-list" 
            mySquirrels={this.state.mySquirrels} 
            clickSquirrel={this.removeSquirrel} />
        </div>
      </>
    )
  }
}

export default SquirrelPage
