import { Component } from "react";
import { connect } from "react-redux";

class PlayerList extends Component {
    renderPlayers = () => {
        return this.props.players.map((player)=>{
            return <li>{player.username}</li>
        });
    };
    
    render() {
        return(
            <ul>
                {this.renderPlayers()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(PlayerList)