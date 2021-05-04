import React from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions/players";

class PlayersContainer extends React.Component {
    render(){
        return(
            <div>
                PlayersList players=players
                <button onClick={this.handleButtonClick}>Add Player</button>
            </div>
        )
    }

    handleButtonClick = () => {
        this.props.addPlayer()
    }
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        addPlayer: ()=>{
            dispatch(addPlayer())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer); 