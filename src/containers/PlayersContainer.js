import React from "react";
import { connect } from "react-redux";
import { addPlayer, fetchPlayers } from "../actions/players";
import PlayerList from "../components/PlayerList";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"

class PlayersContainer extends React.Component {
    render(){
        return(
            <div className='container-fluid bcontent'>
                <Link to='/report-player'>
                    <Button>
                        Report Player
                    </Button>
                </Link>
                <PlayerList store={this.props.store}/>
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
        addPlayer: (username)=>{
            dispatch(addPlayer(username))
        },
        fetchPlayers: ()=>{dispatch(fetchPlayers())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer); 