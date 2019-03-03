import React from "react"
import SquirrelCard from "./SquirrelCard"

class SquirrelList extends React.Component {
  squirrelsMapped = () =>
    this.props.allSquirrels.map(squirrel => (
      <SquirrelCard key={squirrel.id} squirrel={squirrel} clickSquirrel={this.props.clickSquirrel}/>
    ))

  render() {
    return (
      <>
        <div className="squirrel-list">
          <h2>Available Squirrels</h2>
          {this.squirrelsMapped()}
        </div>
      </>
    )
  }
}

export default SquirrelList
