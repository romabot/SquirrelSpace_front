import React from "react"
import { Link, Redirect } from "react-router-dom"

class SquirrelShow extends React.Component {
  state = {
    squirrel: {},
    loading: true
  }

  componentDidMount() {
    fetch(
      `http://localhost:3000/api/v1/squirrels/${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(squirrel => {
        this.setState({ squirrel, loading: false })
      })
  }

  stashesMap = () => {
    console.log(this.state.squirrel.stashes)
    return this.state.squirrel.stashes.map(stash => {
      return (
        <Link key={stash.id} to={`/stashes/${stash.id}`}>
          <h4 className="squirrel-stash-info">{stash.name}</h4>
        </Link>
      )
    })
  }


  deleteHandle = () => {
    fetch(`http://localhost:3000/api/v1/squirrels/${this.state.squirrel.id}`, {
      method: "DELETE"
    }).then(res => res.json())
    .then(data =>{
      this.props.history.push('/squirrels')
    })
  } 


  render() {
    if (this.state.loading) {
      return <h1>loading</h1>
    }

    return (
      <div>
        <h1>{this.state.squirrel.name}</h1>
        <p>{this.state.squirrel.bio}</p>
        <img alt={this.state.squirrel.name} src={this.state.squirrel.img} />
        <br/>
        <button onClick={this.deleteHandle} className="delete" >🐿 DELETE</button>
        <br />
        <h2>STASH:</h2>
        {this.stashesMap()}
      </div>
    )
  }
}

export default SquirrelShow
