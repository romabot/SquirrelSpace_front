import React from "react"
import SquirrelList from "./SquirrelList"
import MySquirrels from "./MySquirrels"

class SquirrelPage extends React.Component {
  state = {
    allSquirrels: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/squirrels")
      .then(res => res.json())
      .then(allSquirrels => {
        this.setState({ allSquirrels })
      })
  }

  render() {
    return (
      <>
        <h1>SquirrelPage</h1>
        <SquirrelList allSquirrels={this.state.allSquirrels} />
        <MySquirrels />
      </>
    )
  }
}

export default SquirrelPage
