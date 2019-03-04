import React from 'react';
import { Link } from 'react-router-dom' 
import StashCard from "./StashCard"



class StashList extends React.Component {
   
    stashesMapped = () => {
        return this.props.stashes
            .map(stash => (
                <StashCard
                    key={stash.id}
                    stash={stash}
                />
            ))
    }

    render() {
        return (
            <>
                <div className="stash-list">
                    {this.stashesMapped()}
                </div>
            </>
        )
    }
}





export default StashList