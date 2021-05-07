import { Component } from "react";
import { connect } from "react-redux";
import Player from "./Player";

class PlayerList extends Component {
    renderPlayers = () => {
        return this.props.players[0].map((player)=>{
            return <Player store={this.props.store} player={player} key={`player${player.id}`}/>
        });
    };
    
    render() {
        return(
            <div class="grid">
                {this.props.players[0] ? this.renderPlayers() : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(PlayerList)