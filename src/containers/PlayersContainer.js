import React from "react";
import { connect } from "react-redux";
import { fetchPlayers } from "../actions/players";
import PlayerList from "../components/PlayerList";

class PlayersContainer extends React.Component {
    render(){
        return(
            <div className='container-fluid bcontent'>
                <PlayerList players={this.props.players}/>
            </div>
        )
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addPlayer(event.target.username.value); //make controlled input
    }

    componentDidMount = () => {
        this.props.fetchPlayers();
    }

    
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlayers: ()=>{dispatch(fetchPlayers())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer); 