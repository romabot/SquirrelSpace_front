import React from "react"
import SquirrelCard from "./SquirrelCard"

class MySquirrels extends React.Component {
  squirrelsMapped = () =>
    this.props.mySquirrels.map(squirrel => (
      <SquirrelCard
        key={squirrel.id}
        squirrel={squirrel}
        clickSquirrel={this.props.clickSquirrel}
      />
    ))

  render() {
    return (
      <>
        <div className="squirrel-list">
          <h2 className="squirrel-stash">🌈 My Squirrel Friends</h2>
          {this.squirrelsMapped()}
        </div>
      </>
    )
  }
}

export default MySquirrels
