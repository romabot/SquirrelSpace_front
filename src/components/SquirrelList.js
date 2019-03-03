import React from "react"
import SquirrelCard from "./SquirrelCard"
import SquirrelSearch from "./SquirrelSearch"

class SquirrelList extends React.Component {
  state = {
    searchQuery: ""
  }

  squirrelsMapped = () => {
    return this.props.allSquirrels
      .filter(squirrel =>
        squirrel.name
          .toLowerCase()
          .includes(this.state.searchQuery.toLowerCase())
      )
      .map(squirrel => (
        <SquirrelCard
          key={squirrel.id}
          squirrel={squirrel}
          clickSquirrel={this.props.clickSquirrel}
        />
      ))}

  doSearch = value => {
    this.setState({
      searchQuery: value
    })
  }

  render() {
    return (
      <>
        <div className="squirrel-list">
          <h2>Available Squirrels</h2>
          <SquirrelSearch
            searchQuery={this.state.searchQuery}
            doSearch={this.doSearch}
          />
          {this.squirrelsMapped()}
        </div>
      </>
    )
  }
}

export default SquirrelList
