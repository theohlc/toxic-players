import { Button } from "bootstrap";
import React from "react";
import { connect } from "react-redux";
import { fetchPlayers } from "../actions/players";
import PlayerList from "../components/PlayerList";

class PlayersContainer extends React.Component {
    constructor(props){
        super(props)

        this.playersList = this.props.players.sort((a, b) => (a.username > b.username) ? 1 : -1)

        this.state = {
            playersSorted: false
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Sort</button>
                <div className='container-fluid bcontent'>
                    <PlayerList players={this.state.playersSorted ? this.playersList : this.props.players}/>
                </div>
            </div>
            
        )
    }

    handleClick = () => {
        this.state.playersSorted ? this.setState({playersSorted: false}) : this.setState({playersSorted: true})
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