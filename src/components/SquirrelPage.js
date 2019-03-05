import React from "react"
import SquirrelList from "./SquirrelList"
import MySquirrels from "./MySquirrels"

class SquirrelPage extends React.Component {
  state = {
    allSquirrels: [],
    mySquirrels: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/squirrels")
      .then(res => res.json())
      .then(allSquirrels => {
        this.setState({
          allSquirrels: allSquirrels.filter(squirrel => !squirrel.caught),
          mySquirrels: allSquirrels.filter(squirrel => squirrel.caught)
        })
      })
  }

  catchSquirrel = squirrelObj => {
    fetch(`http://localhost:3000/api/v1/squirrels/${squirrelObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        caught: true
      })
    })
      .then(res => res.json())
      .then(data => {
        squirrelObj.caught = true

        this.setState({
          allSquirrels: this.state.allSquirrels.filter(
            squirrel => squirrel.id !== squirrelObj.id
          )
        })

        let squirrelFav = this.state.mySquirrels.find(
          squirrel => squirrel.id === squirrelObj.id
        )
        if (!squirrelFav) {
          this.setState({
            mySquirrels: [...this.state.mySquirrels, squirrelObj]
          })
        }
      })
  }

  removeSquirrel = squirrelObj => {
    fetch(`http://localhost:3000/api/v1/squirrels/${squirrelObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        caught: false
      })
    })
      .then(res => res.json())
      .then(data => {
        squirrelObj.caught = false
        this.setState({
          allSquirrels: [squirrelObj, ...this.state.allSquirrels]
        })
        this.setState({
          mySquirrels: this.state.mySquirrels.filter(
            squirrel => squirrel.id !== squirrelObj.id
          )
        })
      })
  }

  render() {
    return (
      <>
        <div className="squirrels-container">
          <SquirrelList
            className="squirrel-list"
            allSquirrels={this.state.allSquirrels}
            clickSquirrel={this.catchSquirrel}
          />
          <MySquirrels
            className="squirrel-list"
            mySquirrels={this.state.mySquirrels}
            clickSquirrel={this.removeSquirrel}
          />
        </div>
      </>
    )
  }
}

export default SquirrelPage
