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
                <img alt={this.state.stash.name} src={this.state.stash.img} />

                <br />
                <h2>SNACK:</h2>
                <Link to={`/info/${this.state.stash.squirrel.id}`}><h1>{this.state.stash.squirrel.name}</h1></Link >
                <h1>{this.state.stash.snack.name}</h1>
                <h1>{this.state.stash.snack.description}</h1>
            </div>
        )
    }
}

export default Info