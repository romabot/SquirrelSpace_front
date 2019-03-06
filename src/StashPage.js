import React from 'react';
import { Link } from 'react-router-dom' 
import StashList from "./StashList"



class StashPage extends React.Component {
    state = {
        stashes: []
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/v1/stashes`)
            .then(res => res.json())
            .then(stashes => this.setState({ stashes }))
    }

  

    render() {
        return (<div>
            {/* <Link to={`/squirrels`}>🌈 Back To Squirrels</Link> */}
            <div className="squirrels-container">
                <StashList stashes={this.state.stashes} />
            </div>
            <br/>

        </div>);
    }
}


export default StashPage