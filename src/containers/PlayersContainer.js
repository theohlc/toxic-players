import React from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions/players";

class PlayersContainer extends React.Component {
    render(){
        return(
            <div>
                PlayersList players=players
                <button onClick={this.handleButtonClick}>BTN</button>
            </div>
        )
    }

    handleButtonClick = () => {
        this.props.store.dispatch(addPlayer())
    }
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        addPlayer: ()=>{
            dispatch()
        }
    }
}

export default connect(mapStateToProps)(PlayersContainer); 