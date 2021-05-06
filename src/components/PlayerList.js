import { Component } from "react";
import { connect } from "react-redux";
import Player from "./Player";
import CardColumns from 'react-bootstrap/CardColumns'

class PlayerList extends Component {
    renderPlayers = () => {
        return this.props.players[0].map((player)=>{
            return <Player store={this.props.store} player={player} key={`player${player.id}`}/>
        });
    };
    
    render() {
        return(
            <CardColumns>
                {this.props.players[0] ? this.renderPlayers() : null}
            </CardColumns>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(PlayerList)