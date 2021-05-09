import React from "react";
import { connect } from "react-redux";
import { fetchPlayers } from "../actions/players";
import PlayerList from "../components/PlayerList";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"

class PlayersContainer extends React.Component {
    render(){
        return(
            <div className='container-fluid bcontent'>
                <Link to='/search'>
                    <Button>
                        Search For a Player
                    </Button>
                </Link>
                {'      '}
                <Link to='/report-player'>
                    <Button>
                        Report a Player
                    </Button>
                </Link>
                <PlayerList players={this.props.players} store={this.props.store}/>
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