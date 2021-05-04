import React from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions/players";
import PlayerList from "../components/PlayerList";

class PlayersContainer extends React.Component {
    render(){
        return(
            <div>
                <PlayerList store={this.props.store}/>
                <form onSubmit={this.handleOnSubmit}>
                    <input type='text' name='username'/>
                    <input type='submit' value='Report User'/>
                </form>
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