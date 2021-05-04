import React from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions/players";
import PlayerList from "../components/PlayerList";

class PlayersContainer extends React.Component {
    render(){
        return(
            <div>
                <PlayerList players={players}/>
                <button onClick={this.handleButtonClick}>Add Player</button>
            </div>
        )
    }

    handleButtonClick = () => {
        this.props.addPlayer()
    }

    
}

let players = [
    {username: 'user1'},
    {username: 'user2'},
    {username: 'user3'},
]
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