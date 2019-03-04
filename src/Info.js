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

    stashesMap = () => {
        console.log(this.state.squirrel.snacks)
        // return this.state.squirrel.stashes.map(stash => {
        //     return stash
        // })
        }
  


    render() {
        return (<div>
            <Link to={`/squirrels`}>🌈 Back To Squirrels</Link>
            <h1>{this.state.squirrel.name}</h1>
            <p>{this.state.squirrel.bio}</p>
            <img alt={this.state.squirrel.name} src={this.state.squirrel.img} />
            <br />
            <h2>STASH:</h2>
            <h2>{this.stashesMap()}</h2>

        </div>);
    }
}
 


export default Info