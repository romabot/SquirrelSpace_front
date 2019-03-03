import React from "react"
import SquirrelCard from "./SquirrelCard"

class SquirrelList extends React.Component {
  squirrelsMapped = () =>
    this.props.allSquirrels.map(squirrel => (
      <SquirrelCard key={squirrel.id} squirrel={squirrel} />
    ))

  render() {
    return (
      <>
        <div className="squirrel-list">
          SquirrelList:
          {this.squirrelsMapped()}
        </div>
      </>
    )
  }
}

export default SquirrelList
