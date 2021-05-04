import React from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions/players";
import PlayerList from "../components/PlayerList";

class PlayersContainer extends React.Component {
    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type='text' name='username'/> {/** add fields for offence, etc */}
                    <input type='submit' value='Report User'/>
                </form>
                <PlayerList store={this.props.store}/>
            </div>
        )
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addPlayer(event.target.username.value); //make controlled input
    }

    
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        addPlayer: (username)=>{
            dispatch(addPlayer(username))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer); 