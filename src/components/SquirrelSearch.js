import React from "react"


    class SquirrelSearch extends React.Component {

        changeHandler = (e) => {
            return this.props.doSearch(e.target.value)
        }


        render() {
            return(
                <form className="">
                    <input onChange={this.changeHandler} type="search" placeholder="FIND YOUR SQUIRREL!" value={this.props.searchQuery}></input>
                </form>
            )
        }
    }





export default SquirrelSearch