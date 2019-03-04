import React from 'react';
import { Link } from 'react-router-dom' 


class Info extends React.Component {
    state = {
        squirrel: {}
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/v1/squirrels/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(squirrel => this.setState({squirrel}))
    }


    render() {
        return (<div>
            <Link to={`/squirrels`}>Back To Squirrels</Link>
            <h1>{this.state.squirrel.name}</h1>
            <img alt={this.state.squirrel.name} src={this.state.squirrel.img} />
            <br />
            <h3>STASH:</h3>

        </div>);
    }
}
 


export default Info