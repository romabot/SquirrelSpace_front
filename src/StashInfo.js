import React from "react"
import { Link } from "react-router-dom"

class Info extends React.Component {
    state = {
        stash: {},
        loading: true
    }

    componentDidMount() {
        fetch(
            `http://localhost:3000/api/v1/stashes/${this.props.match.params.id}`
        )
            .then(res => res.json())
            .then(stash => {
                this.setState({ stash, loading: false })
            })
    }

    render() {
        if (this.state.loading) {
            return <h1>loading</h1>
        }

        return (
            <div>
                <Link to={`/stashes`}>🌈 Back To stashes</Link>
                <h1>{this.state.stash.name}</h1>
                <img className="stash-img" alt={this.state.stash.name} src={this.state.stash.img} />
                <Link to={`/info/${this.state.stash.squirrel.id}`}><h4>{this.state.stash.squirrel.name}</h4></Link >
                <span className="owns-this">owns this stash!</span>

                <br />
                <h1>SNACK:</h1>
                <h2>{this.state.stash.snack.name}</h2>
                <h4 className="snack-description">{this.state.stash.snack.description}</h4>
                
            </div>
        )
    }
}

export default Info